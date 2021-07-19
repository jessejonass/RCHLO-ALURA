export type Category = {
  id: number,
  link: string,
  name: string
}

export type Categories = {
    all: Category[];
    current: Category[];
}

// export type Categories = {
//   categories: {
//     all: Category[];
//     current: Category[];
//   }
// }