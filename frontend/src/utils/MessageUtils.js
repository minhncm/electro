class MessageUtils {
  static min = (subject, value) => `${subject} có ít nhât ${value} kí tự`;
  static max = (subject, value) =>
    `${subject} chỉ có nhiều nhất ${value} kí tự`;
}

export default MessageUtils;
