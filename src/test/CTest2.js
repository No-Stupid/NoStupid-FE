import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {ko} from "date-fns/esm/locale";

const ReactDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
  
      return (

          <div>
              <DatePicker
                locale={ko}
                selected={startDate}
                shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                //minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
                //maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy/MM/dd"
              />
          </div>
    );
  };
  
  export default ReactDatePicker;