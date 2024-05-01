import React from "react";
import { Notices,MonthNameTitle } from "../../Props";
import './common.css'
function January()
{
    return (
        <div className="months_common">
            <MonthNameTitle name="Jan"/>
            <Notices noticeTitle="Re Opening Notice" noticeName="College re-opening notice 2024"/>
            <Notices noticeTitle="Sem 4 (R2019 C Scheme )examination time-table" noticeName="1T01831-FE-SEM-4_C-Scheme"/>
            <Notices noticeTitle="Sem 6 (R2019 C Scheme )examination time-table" noticeName="1T01831-FE-SEM-6_C-Scheme"/>
        </div>
    )
}

export default January