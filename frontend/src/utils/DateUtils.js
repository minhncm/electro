const dayjs = require("dayjs");

class DateUtils {
  static formatterDate = (isoDate, format = "HH:mm:ss DD/MM/YYYY") => {
    const date = dayjs(isoDate);
    return date.isValid() ? date.format(format).toString() : isoDate;
  };

  static today = () => {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  };
}

export default DateUtils;
