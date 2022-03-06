function 최댓값(...a: number[]): number {
  let x = a[0];
  for (let i = 1; i < a.length; i++) {
    if (x < a[i]) {
      x = a[i];
    }
  }
  return x;
}
console.log(최댓값(6, 3, 7, 2));

function 함수님({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}): void {
  console.log(user, comment, admin);
}

함수님({ user: "kim", comment: [3, 5, 4], admin: false });

function 함수형님([age, name, isFood]: (number | string | boolean)[]): void {
  console.log(age, name, isFood);
}
함수형님([40, "wine", false]);
