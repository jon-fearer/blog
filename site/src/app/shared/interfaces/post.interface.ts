export interface IPost {
  title: string,
  path: string,
  postedOn: string, // ISO date format YYYY-MM-DD
  imagePath: string,
  tags: string[],
}
