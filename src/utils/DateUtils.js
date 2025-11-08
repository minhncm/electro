const dayjs = require("dayjs");

const formatterDate = (isoDate, format = "HH:mm:ss DD/MM/YYYY") => {
  const date = dayjs(isoDate);
  return date.isValid() ? date.format(format).toString() : isoDate;
};

const DateUtils = {
  formatterDate,
};

export default DateUtils;
