function now() {
  return new Date();
}

export function year(time: Date = now()) {
  return time.getFullYear();
}

export function month(time: Date = now()) {
  return time.getMonth();
}

export function date(time: Date = now()) {
  return time.getDate();
}

export function day(time: Date = now()) {
  return time.getDay();
}

export default {
  year,
  month,
  date,
  day,
};
