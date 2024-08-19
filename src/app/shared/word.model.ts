export interface Word {
  key: string,
  position: number,
  state?: 'miss' | 'wrong-order' | 'match',
}
