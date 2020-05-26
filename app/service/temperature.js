const Service = require('egg').Service;
const TABLE = "temperature";

class TemperatureService extends Service {

    async insert(data) {
        const result = await this.app.mysql.insert(TABLE, data);
        return result;
    }

    async findNow(id) {
        const sql = `SELECT record FROM ${TABLE} WHERE date(time) = curdate() and sid = ${id};`;
        const result = await this.app.mysql.query(sql);
        return result[0];
    }

    /**
     * 根据学生id删除体温信息
     * @param {*} studentid 
     */
    async deleteByStudentId(id) {
        const result = await this.app.mysql.delete(TABLE, {
            sid: id,
        });
        return result.protocol41;
    }

    /**
     * 根据id获取全部时间
     * @param {*} id 
     */
    async data(id) {
        const sql = `select record, date_format( time, '%Y-%m-%d' ) as time from ${TABLE} where sid = ${id} order by time desc`;
        return await this.app.mysql.query(sql);
    }

    /**
     * 获取区间数据(根据系别)
     * @param {*} time 
     * @param {*} dep 
     */
    async bardataByDep(time, dep) {
        let sids = await this.sid({ department: dep });
        if (sids) {
            const sql = `SELECT ELT( INTERVAL( record, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0) ,
            '35.0-36.0',  '36.0-37.0', '37.0-38.0', '38.0-39.0', '39.0-40.0') AS 'interval',
            COUNT( * ) AS  'num'
            FROM temperature WHERE TIME >= '${time[0]}' AND TIME <= '${time[1]}'
            AND sid IN ( ${sids} ) 
            GROUP BY ELT( INTERVAL( record, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0) , 
            '35.0-36.0',  '36.0-37.0',  '37.0-38.0',  '38.0-39.0', '39.0-40.0')`;
            return await this.app.mysql.query(sql);
        } else {
            return [];
        }
    }

    /**
     * 获取区间数据(根据班级)
     * @param {*} time 
     * @param {*} dep 
     */
    async bardataByClas(time, dep, clas) {
        let sids = await this.sid({ department: dep, clas: clas });
        if (sids) {
            const sql = `SELECT ELT( INTERVAL( record, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0) ,
            '35.0-36.0',  '36.0-37.0', '37.0-38.0', '38.0-39.0', '39.0-40.0') AS 'interval',
            COUNT( * ) AS  'num'
            FROM temperature WHERE TIME >= '${time[0]}' AND TIME <= '${time[1]}'
            AND sid IN ( ${sids} ) 
            GROUP BY ELT( INTERVAL( record, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0) , 
            '35.0-36.0',  '36.0-37.0',  '37.0-38.0',  '38.0-39.0', '39.0-40.0')`;
            return await this.app.mysql.query(sql);
        } else {
            return [];
        }
    }

    /**
     * 根据条件获取id
     */
    async sid(where) {
        const ids = await this.app.mysql.select('students', {
            where: where,
            columns: ["id"]
        });
        let sids = '';
        ids.map(function (e) {
            sids += `${e.id},`;
        });
        sids = sids.slice(0, sids.length - 1);
        return sids || '';
    }

    /**
     * 统计37.0以上的人数
     * @param {*} record 
     */
    async outstandard(record) {
        record = parseFloat(record);
        //当天统计
        const now_sql = `SELECT count(DISTINCT sid) FROM temperature WHERE date(time) = curdate() AND record >= ${record};`;
        //全部统计
        const all_sql = `SELECT count(DISTINCT sid) FROM temperature WHERE record >= ${record}`;
        let all = await this.app.mysql.query(all_sql);
        let now = await this.app.mysql.query(now_sql);
        return {
            all: all[0]['count(DISTINCT sid)'],
            now: now[0]['count(DISTINCT sid)']
        };
    }
}

module.exports = TemperatureService;



