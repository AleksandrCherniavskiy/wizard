export interface GenreBase {
  id: number;
  name: string;
}

export interface Subgenre extends GenreBase {
  isDescriptionRequired: boolean;
}

export interface Genre extends GenreBase {
  subgenres: Subgenre[];
}
