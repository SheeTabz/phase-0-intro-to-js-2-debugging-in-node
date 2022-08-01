let count = 0;
while (count < 5) {
  debbuger;
  if (count === 1 || count === 0) {
    console.log(`The loop has executed ${count} time.`);
  } else {
    console.log(`The loop has executed ${count} times.`);
  }
  count += 1;
  debbuger;
}
