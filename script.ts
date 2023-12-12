import dayjs from 'dayjs';

const today = new Date();
const tomorrow = dayjs().add(1, 'day').format('DD/MM/YYYY hh:mm A');

// console.log(today);
console.log(tomorrow);