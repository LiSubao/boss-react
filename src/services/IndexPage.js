import $ from '../utils/ajax';

async function testService(params) {
    var data={
        item:"tunnel_rate",
        tid:1,
        start_tm:"1970-01-12%2015:23:42",
        end_tm:"2018-12-13%2018:59:04"
    }
    return $.getJSON("/v2/step/statistics?item=users_content&companyid=76&start_tm=1970-01-12%2015:23:42&end_tm=2018-12-13%2018:59:04&top=5&sip=172.16.11.111")
}


export {testService}