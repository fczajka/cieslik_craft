const ASSET_BASE = '/cieslik-craft';

type GalleryCollection = 'dolceVita' | 'discoVolante';

export type GalleryTileHeight = 'short' | 'standard' | 'feature';

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
};

export type GalleryTile = {
  height: GalleryTileHeight;
  front: GalleryImage;
  back: GalleryImage;
};

export type GallerySection = {
  title: string;
  columns: GalleryTile[][];
};

const collectionTitles: Record<GalleryCollection, string> = {
  dolceVita: 'Dolce Vita',
  discoVolante: 'Disco Volante',
};

const galleryImage = (
  collection: GalleryCollection,
  sourceNumber: number,
  altNumber: number,
  caption: string,
  objectPosition?: string,
): GalleryImage => {
  const title = collectionTitles[collection];
  const fileName = `Cieslik Craft - ${title} - galeria zdjecie ${sourceNumber} - woodenboat made in Poland.webp`;

  return {
    src: `${ASSET_BASE}/${collection}/${fileName}`,
    alt: `CieslikCraft - Gallery - zdj${altNumber}`,
    caption,
    objectPosition,
  };
};

const tile = (
  height: GalleryTileHeight,
  front: GalleryImage,
  back: GalleryImage,
): GalleryTile => ({ height, front, back });

export const gallerySections: GallerySection[] = [
  {
    title: 'Dolce Vita',
    columns: [
      [
        tile(
          'standard',
          galleryImage(
            'dolceVita',
            5,
            5,
            'Wykończenie podcięć w ramach pod wzdłużniki',
          ),
          galleryImage('dolceVita', 6, 6, 'Przykręcanie wzdłużników do ramy'),
        ),
        tile(
          'feature',
          galleryImage(
            'dolceVita',
            4,
            4,
            'Szkielet motorówki Dolce Vita (projektu Glen-L ZIP)',
          ),
          galleryImage(
            'dolceVita',
            11,
            11,
            'Mocowanie lewej burty do szkieletu łodzi',
          ),
        ),
        tile(
          'short',
          galleryImage(
            'dolceVita',
            1,
            1,
            'Sklejenie stewy dziobowej',
            '50% 80%',
          ),
          galleryImage(
            'dolceVita',
            2,
            2,
            'Wyznaczenie kąta mocowania z użyciem lasera krzyżowego',
          ),
        ),
      ],
      [
        tile(
          'standard',
          galleryImage(
            'dolceVita',
            19,
            19,
            'Wygładzenie powierzchni kadłuba przed malowaniem',
          ),
          galleryImage(
            'dolceVita',
            22,
            22,
            'Wygładzenie powierzchni kadłuba przed malowaniem',
          ),
        ),
        tile(
          'standard',
          galleryImage(
            'dolceVita',
            20,
            20,
            'Przygotowanie farby poliuretanowej Sea - Line',
          ),
          galleryImage(
            'dolceVita',
            21,
            21,
            'Przygotowanie farby poliuretanowej Sea - Line',
          ),
        ),
        tile(
          'standard',
          galleryImage(
            'dolceVita',
            23,
            23,
            'Pierwsze odbiory techniczne po lakierowaniu kadłuba',
            '50% 20%',
          ),
          galleryImage(
            'dolceVita',
            24,
            24,
            'Pierwsze odbiory techniczne po lakierowaniu kadłuba',
          ),
        ),
      ],
      [
        tile(
          'standard',
          galleryImage('dolceVita', 13, 13, 'Przygotowanie żywicy epoksydowej'),
          galleryImage(
            'dolceVita',
            12,
            12,
            'Mocowanie tkaniny szklanej do kadłuba',
          ),
        ),
        tile(
          'standard',
          galleryImage('dolceVita', 3, 3, 'sklejone elementy ramy'),
          galleryImage(
            'dolceVita',
            7,
            7,
            'Podcięcia wzdłużników zapewniające przepływ wody do pomp zęzowych',
            '50% 20%',
          ),
        ),
        tile(
          'standard',
          galleryImage('dolceVita', 9, 9, 'Mocowanie prawej burty do ramy'),
          galleryImage(
            'dolceVita',
            10,
            10,
            'Wykończenie krawędzi styku burt na dziobie łodzi z użyciem piły japońskiej',
          ),
        ),
      ],
      [
        tile(
          'standard',
          galleryImage(
            'dolceVita',
            18,
            18,
            'Szlifowanie powierzchni burt z wykorzystaniem szlifierki oscylacyjnej',
          ),
          galleryImage(
            'dolceVita',
            16,
            16,
            'Kontrola proporcji i procesu przygotowania farb przed malowaniem',
          ),
        ),
        tile(
          'short',
          galleryImage(
            'dolceVita',
            17,
            17,
            'Szlifowanie powierzchni burt z wykorzystaniem szlifierki taśmowej',
          ),
          galleryImage(
            'dolceVita',
            8,
            8,
            'Dop[asowanie kątów wzdłużników z użyciem struga ręcznego No. 5',
          ),
        ),
        tile(
          'standard',
          galleryImage(
            'dolceVita',
            14,
            14,
            'Przygotowanie farby poliuretanowej Sea - Line',
          ),
          galleryImage(
            'dolceVita',
            15,
            15,
            'Przygotowanie farby poliuretanowej Sea - Line',
          ),
        ),
        tile(
          'short',
          galleryImage('dolceVita', 25, 17, 'Skanowanie 3D kadłuba łodzi'),
          galleryImage(
            'dolceVita',
            26,
            8,
            'Skanowanie 3D kadłuba łodzi',
            '50% 20%',
          ),
        ),
      ],
    ],
  },
  {
    title: 'Disco Volante',
    columns: [
      [
        tile(
          'short',
          galleryImage('discoVolante', 1, 1, 'Deska rodzielcza Disco Volante'),
          galleryImage('discoVolante', 2, 2, 'Deska rodzielcza Disco Volante'),
        ),
        tile(
          'standard',
          galleryImage(
            'discoVolante',
            15,
            15,
            'Disco Volante podczas parady sobótkowej (Poznańskie wianki)',
          ),
          galleryImage(
            'discoVolante',
            11,
            11,
            'Disco Volante podczas parady sobótkowej (Poznańskie wianki)',
          ),
        ),
        tile(
          'short',
          galleryImage(
            'discoVolante',
            4,
            4,
            'Pierwsze wodowanie Disco Volante',
          ),
          galleryImage(
            'discoVolante',
            5,
            5,
            'Pierwsze wodowanie Disco Volante',
          ),
        ),
        tile(
          'standard',
          galleryImage(
            'discoVolante',
            12,
            12,
            'Disco Volante w starym Porcie Poznań',
          ),
          galleryImage(
            'discoVolante',
            23,
            23,
            'Disco Volante w Starym Porcie Poznań przyciąga uwagę ☺',
          ),
        ),
      ],
      [
        tile(
          'standard',
          galleryImage(
            'discoVolante',
            3,
            3,
            'Wyróznienie DIsco Volante na Warszawskim Salonie Jachtowym',
          ),
          galleryImage(
            'discoVolante',
            26,
            26,
            'Wyróznienie DIsco Volante na Warszawskim Salonie Jachtowym',
          ),
        ),
        tile(
          'standard',
          galleryImage(
            'discoVolante',
            20,
            20,
            'Disco Volante podczas parady sobótkowej (Poznańskie wianki)',
          ),
          galleryImage(
            'discoVolante',
            17,
            17,
            'Disco Volante podczas parady sobótkowej (Poznańskie wianki)',
          ),
        ),
        tile(
          'short',
          galleryImage(
            'discoVolante',
            34,
            34,
            'Disco Volante na Cybinie (Poznań)',
          ),
          galleryImage(
            'discoVolante',
            37,
            35,
            'Disco Volante pod Bramą Poznania',
          ),
        ),
        tile(
          'short',
          galleryImage(
            'discoVolante',
            19,
            19,
            'Disco Volante podczas parady sobótkowej (Poznańskie Wianki)',
          ),
          galleryImage(
            'discoVolante',
            33,
            33,
            'Disco Volante podczas parady sobótkowej (Poznańskie Wianki)',
          ),
        ),
      ],
      [
        tile(
          'standard',
          galleryImage('discoVolante', 27, 27, 'Cieślik Craft'),
          galleryImage('discoVolante', 31, 31, 'Yamaha 25 2T'),
        ),
        tile(
          'short',
          galleryImage(
            'discoVolante',
            22,
            22,
            'Pływanie w ślizgu na rzece Warcie',
          ),
          galleryImage(
            'discoVolante',
            16,
            16,
            'Disco Volante podczas parady sobótkowej (Poznańskie wianki)',
          ),
        ),
        tile(
          'short',
          galleryImage(
            'discoVolante',
            9,
            9,
            'Sesja zdjęciowa dla Miler Menswear',
          ),
          galleryImage(
            'discoVolante',
            10,
            10,
            'Sesja zdjęciowa dla Miler Menswear',
          ),
        ),
        tile(
          'standard',
          galleryImage('discoVolante', 25, 25, 'Skanowanie 3D łodzi'),
          galleryImage('discoVolante', 24, 24, 'Skanowanie 3D łodzi'),
        ),
      ],
      [
        tile(
          'short',
          galleryImage(
            'discoVolante',
            7,
            7,
            'Polerowanie łodzi w firmie Autoklinika',
          ),
          galleryImage(
            'discoVolante',
            8,
            8,
            'Polerowanie łodzi w firmie Autoklinika',
          ),
        ),
        tile(
          'standard',
          galleryImage('discoVolante', 29, 29, 'Disco Volante na Mazurach'),
          galleryImage('discoVolante', 30, 30, 'Disco Volante na Mazurach'),
        ),
        tile(
          'short',
          galleryImage(
            'discoVolante',
            21,
            21,
            'Disco Volante podczas parady sobótkowej (Poznańskie wianki)',
          ),
          galleryImage(
            'discoVolante',
            18,
            18,
            'Disco Volante podczas parady sobótkowej (Poznańskie wianki)',
          ),
        ),
        tile(
          'standard',
          galleryImage(
            'discoVolante',
            32,
            32,
            'Disco Volante podczas wodowanie w Akwen Marina Czerwonak',
          ),
          galleryImage(
            'discoVolante',
            28,
            28,
            'Disco Volante na Warszawskim Salonie Jachtowym',
          ),
        ),
      ],
    ],
  },
];
