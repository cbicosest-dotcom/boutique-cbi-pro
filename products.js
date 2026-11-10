const PRODUCTS = [
  {
    "id": 1,
    "name": "Flyer Formation En Cosmetique",
    "category": "Formations & livres",
    "image": "assets/formation-professionnelle-flyer-formation-en-cosmetique.webp",
    "price": 0
  },
  {
  "id": 2,
  "name": "Formation en Chimie Industrielle",
  "category": "Formations & livres",
  "image": "assets/formation-professionnelle-formation-en-chimie-industrielle.webp",
  "price": 0,
  "description": "Développez vos compétences en chimie industrielle avec IFPCBI. Découvrez les principes de la chimie appliquée, les matières premières, les procédés de fabrication, les techniques de production et le contrôle qualité. Une formation orientée vers la pratique professionnelle.",
  "seoTitle": "Formation en Chimie Industrielle | IFPCBI Cameroun",
  "seoDescription": "Suivez une formation en chimie industrielle avec IFPCBI à Douala, Cameroun. Apprenez les procédés de fabrication, la production et le contrôle qualité."
},
  {
  "id": 3,
  "name": "Formation en Dermocosmétique Capillaire",
  "category": "Formations & livres",
  "image": "assets/formation-professionnelle-formation-en-dermocosmetique-capillaire.webp",
  "price": 0,
  "description": "Apprenez la dermocosmétique capillaire avec IFPCBI. Découvrez la structure de la fibre capillaire, le cuir chevelu, les matières premières, les actifs cosmétiques et les techniques professionnelles de formulation de shampoings, masques, sérums, huiles et soins capillaires.",
  "seoTitle": "Formation en Dermocosmétique Capillaire | IFPCBI",
  "seoDescription": "Formation professionnelle en dermocosmétique capillaire à Douala, Cameroun. Apprenez la formulation et la fabrication de produits de soins capillaires avec IFPCBI."
},
  {
  "id": 4,
  "name": "Formation en Dermocosmétique",
  "category": "Formations & livres",
  "image": "assets/formation-professionnelle-formation-en-dermocosmetique.webp",
  "price": 0,
  "description": "Découvrez la dermocosmétique avec IFPCBI. Apprenez à comprendre la peau, ses besoins, les actifs cosmétiques et les principes de formulation des produits de soin : hydratants, nettoyants, sérums, soins anti-imperfections et produits destinés à améliorer l'apparence et le confort de la peau.",
  "seoTitle": "Formation en Dermocosmétique | IFPCBI Cameroun",
  "seoDescription": "Apprenez la dermocosmétique avec IFPCBI à Douala, Cameroun : connaissance de la peau, actifs cosmétiques et formulation professionnelle des soins cutanés."
},
  {
  "id": 5,
  "name": "Livre de Dermocosmétique Capillaire",
  "category": "Formations & livres",
  "image": "assets/formation-professionnelle-livre-de-dermocosmetique-capillaire.webp",
  "price": 0,
  "description": "Approfondissez vos connaissances en dermocosmétique capillaire grâce à ce manuel professionnel. Découvrez la structure du cheveu, la physiologie du cuir chevelu, les matières premières, les actifs capillaires et les principes scientifiques de formulation des shampoings, masques, huiles, sérums et autres soins capillaires. Un support pédagogique destiné aux apprenants et aux professionnels de la cosmétique.",
  "seoTitle": "Livre de Dermocosmétique Capillaire | Manuel professionnel",
  "seoDescription": "Découvrez le manuel professionnel de dermocosmétique capillaire de CBI. Un support sur la science du cheveu, les matières premières et la formulation des soins capillaires."
},
  {
  "id": 6,
  "name": "Livre des Matières Premières en Cosmétique",
  "category": "Formations & livres",
  "image": "assets/formation-professionnelle-livre-de-matieres-premieres-cosmetique.webp",
  "price": 0,
  "description": "Découvrez un ouvrage consacré aux matières premières utilisées en formulation cosmétique. Explorez les huiles végétales, beurres, cires, tensioactifs, émulsifiants, humectants, conservateurs et actifs cosmétiques. Un support documentaire pour comprendre leurs propriétés, leurs fonctions et leur utilisation dans la conception de produits cosmétiques.",
  "seoTitle": "Livre des Matières Premières en Cosmétique | CBI",
  "seoDescription": "Un guide sur les matières premières cosmétiques : huiles, beurres, cires, tensioactifs, émulsifiants et actifs. Découvrez les ressources de CBI au Cameroun."
},
  {
  "id": 8,
  "name": "Eau de Parfum 10",
  "category": "Parfumerie",
  "image": "assets/parfumerie-eau-de-parfum-10.webp",
  "price": 1000,
  "description": "Découvrez notre eau de parfum, une fragrance destinée à apporter une touche élégante et raffinée à votre quotidien. Retrouvez ce parfum dans la sélection parfumerie de BOUTIQUE CBI, votre boutique de produits cosmétiques et de beauté au Cameroun.",
  "seoTitle": "Eau de Parfum 10 | Parfumerie BOUTIQUE CBI",
  "seoDescription": "Découvrez l'Eau de Parfum 10 chez BOUTIQUE CBI au Cameroun. Explorez notre sélection de parfums et produits de beauté."
},
  {
  "id": 9,
  "name": "Huile de Parfum Sensuel",
  "category": "Parfumerie",
  "image": "assets/parfumerie-huile-de-parfum-sensuel.webp",
  "price": 500,
  "description": "Découvrez l'Huile de Parfum Sensuel, une fragrance élégante pour parfumer délicatement votre quotidien. Sa présentation sous forme d'huile permet une application ciblée. Retrouvez ce produit dans la collection parfumerie de BOUTIQUE CBI, à Douala, Cameroun.",
  "seoTitle": "Huile de Parfum Sensuel | BOUTIQUE CBI Cameroun",
  "seoDescription": "Achetez l'Huile de Parfum Sensuel chez BOUTIQUE CBI à Douala, Cameroun. Découvrez notre sélection de fragrances et huiles parfumées."
},
  {
  "id": 10,
  "name": "Huile Parfum Passion",
  "category": "Parfumerie",
  "image": "assets/parfumerie-huile-parfum-passion.webp",
  "price": 1000,
  "description": "Découvrez l'Huile Parfum Passion, une huile parfumée pour apporter une touche agréable et raffinée à votre quotidien. Retrouvez cette fragrance dans la collection parfumerie de BOUTIQUE CBI, votre boutique de produits de beauté et de parfumerie à Douala, Cameroun.",
  "seoTitle": "Huile Parfum Passion | Parfumerie BOUTIQUE CBI",
  "seoDescription": "Découvrez l'Huile Parfum Passion chez BOUTIQUE CBI à Douala, Cameroun. Explorez notre sélection d'huiles parfumées et de fragrances."
},
  {
  "id": 11,
  "name": "Parfum Cœur de Jardin",
  "category": "Parfumerie",
  "image": "assets/parfumerie-parfum-coeur-de-jardin.webp",
  "price": 1000,
  "description": "Laissez-vous séduire par le Parfum Cœur de Jardin, une fragrance au nom évocateur, idéale pour accompagner vos moments du quotidien. Découvrez ce parfum dans la sélection parfumerie de BOUTIQUE CBI à Douala, Cameroun.",
  "seoTitle": "Parfum Cœur de Jardin | BOUTIQUE CBI Cameroun",
  "seoDescription": "Découvrez le Parfum Cœur de Jardin chez BOUTIQUE CBI à Douala. Retrouvez notre sélection de parfums et fragrances au Cameroun."
},
  {
  "id": 12,
  "name": "Parfum Essence",
  "category": "Parfumerie",
  "image": "assets/parfumerie-parfum-essence.webp",
  "price": 7000,
  "description": "Découvrez Parfum Essence, une fragrance pensée pour apporter une touche parfumée et élégante à votre quotidien. Retrouvez ce produit dans la collection parfumerie de BOUTIQUE CBI, votre boutique de parfums et de produits de beauté à Douala, Cameroun.",
  "seoTitle": "Parfum Essence | Boutique de parfumerie CBI",
  "seoDescription": "Retrouvez Parfum Essence chez BOUTIQUE CBI à Douala, Cameroun. Découvrez notre sélection de parfums et de fragrances."
},
  {
  "id": 13,
  "name": "Parfum Love L",
  "category": "Parfumerie",
  "image": "assets/parfumerie-parfum-love-l.webp",
  "price": 1000,
  "description": "Découvrez Parfum Love L, une fragrance au nom évocateur pour apporter une touche parfumée et élégante à votre quotidien. Retrouvez ce parfum dans la collection parfumerie de BOUTIQUE CBI à Douala, Cameroun.",
  "seoTitle": "Parfum Love L | BOUTIQUE CBI Douala",
  "seoDescription": "Découvrez Parfum Love L chez BOUTIQUE CBI à Douala, Cameroun. Explorez notre sélection de parfums et de fragrances."
},
  {
  "id": 14,
  "name": "Parfum Love You",
  "category": "Parfumerie",
  "image": "assets/parfumerie-parfum-love-you.webp",
  "price": 1000,
  "description": "Découvrez Parfum Love You, une fragrance parfumée pour accompagner vos moments du quotidien avec une touche d'élégance. Retrouvez ce parfum dans la collection parfumerie de BOUTIQUE CBI, à Douala, Cameroun.",
  "seoTitle": "Parfum Love You | BOUTIQUE CBI Cameroun",
  "seoDescription": "Achetez Parfum Love You chez BOUTIQUE CBI à Douala, Cameroun. Découvrez notre sélection de parfums et fragrances."
},
  {
  "id": 15,
  "name": "Parfum Love",
  "category": "Parfumerie",
  "image": "assets/parfumerie-parfum-love.webp",
  "price": 10000,
  "description": "Découvrez Parfum Love, une fragrance élégante pour parfumer votre quotidien et accompagner vos moments privilégiés. Retrouvez ce parfum dans la collection parfumerie de BOUTIQUE CBI à Douala, Cameroun.",
  "seoTitle": "Parfum Love | Boutique de parfumerie CBI",
  "seoDescription": "Découvrez Parfum Love chez BOUTIQUE CBI à Douala, Cameroun. Retrouvez notre sélection de parfums et de fragrances."
},
  {
  "id": 16,
  "name": "Parfum Passion 30",
  "category": "Parfumerie",
  "image": "assets/parfumerie-parfum-passion-30.webp",
  "price": 5000,
  "description": "Découvrez Parfum Passion 30, une fragrance parfumée pour apporter une touche élégante à votre quotidien. Retrouvez ce parfum dans la collection parfumerie de BOUTIQUE CBI, votre boutique de parfums et de produits de beauté à Douala, Cameroun.",
  "seoTitle": "Parfum Passion 30 | BOUTIQUE CBI Douala",
  "seoDescription": "Retrouvez Parfum Passion 30 chez BOUTIQUE CBI à Douala, Cameroun. Découvrez notre sélection de parfums et fragrances."
},
  {
  "id": 17,
  "name": "Parfum Passion",
  "category": "Parfumerie",
  "image": "assets/parfumerie-parfum-passion.webp",
  "price": 1500,
  "description": "Découvrez Parfum Passion, une fragrance pour accompagner votre quotidien avec une touche parfumée et élégante. Retrouvez ce parfum dans la collection parfumerie de BOUTIQUE CBI à Douala, Cameroun.",
  "seoTitle": "Parfum Passion | BOUTIQUE CBI Cameroun",
  "seoDescription": "Découvrez Parfum Passion chez BOUTIQUE CBI à Douala. Explorez notre sélection de parfums et fragrances au Cameroun."
},
  {
  "id": 18,
  "name": "Baume Capillaire Nadi 18",
  "category": "Soins capillaires",
  "image": "assets/produits-capillaires-baume-capillaire-nadi-18.webp",
  "price": 1000,
  "description": "Découvrez le Baume Capillaire Nadi 18, un soin destiné à nourrir les cheveux, faciliter leur démêlage et améliorer leur douceur. Il s'intègre dans une routine de soins capillaires pour aider à entretenir la fibre et préserver la souplesse des cheveux.",
  "seoTitle": "Baume Capillaire Nadi 18 | Soin des cheveux CBI",
  "seoDescription": "Découvrez le Baume Capillaire Nadi 18 chez BOUTIQUE CBI à Douala, Cameroun. Un soin capillaire pour nourrir, adoucir et faciliter le démêlage."
},
  {
  "id": 19,
  "name": "Baume Capillaire Royal Crown",
  "category": "Soins capillaires",
  "image": "assets/produits-capillaires-baume-capillaire-royal-crown.webp",
  "price": 5000,
  "description": "Découvrez le Baume Capillaire Royal Crown, un soin conçu pour accompagner l'entretien quotidien des cheveux. Il aide à assouplir la fibre capillaire, faciliter le coiffage et apporter une sensation de douceur. Un soin à intégrer dans votre routine capillaire.",
  "seoTitle": "Baume Capillaire Royal Crown | BOUTIQUE CBI",
  "seoDescription": "Achetez le Baume Capillaire Royal Crown chez BOUTIQUE CBI à Douala, Cameroun. Découvrez nos soins pour l'entretien et la beauté des cheveux."
},
  {
  "id": 20,
  "name": "Baume Nadi 18 Vente en Gros - Carton de 100",
  "category": "Soins capillaires",
  "image": "assets/produits-capillaires-baume-nadi-18-vente-en-gros.webp",
  "price": 45000,
  "description": "Achetez le Baume Capillaire Nadi 18 en gros chez BOUTIQUE CBI. Offre professionnelle : carton de 100 unités à 45 000 FCFA, soit 450 FCFA l'unité. Une opportunité pour les revendeurs, distributeurs, boutiques de cosmétiques et commerçants souhaitant développer leur activité dans les soins capillaires. Commandes à Douala et partout au Cameroun.",
  "seoTitle": "Baume Nadi 18 en Gros - Carton de 100 à 45 000 FCFA",
  "seoDescription": "Baume Nadi 18 en gros : carton de 100 unités à 45 000 FCFA. Fournisseur de produits capillaires pour revendeurs au Cameroun. BOUTIQUE CBI."
},
  {
  "id": 21,
  "name": "Élixir Pousse Extrême Royal Crown",
  "category": "Soins capillaires",
  "image": "assets/produits-capillaires-elixir-pousse-extreme-royal-crown.webp",
  "price": 0,
  "description": "Découvrez l'Élixir Pousse Extrême Royal Crown, un soin capillaire destiné à accompagner votre routine de beauté des cheveux. Il s'intègre dans les soins du cuir chevelu et de la fibre capillaire pour aider à entretenir des cheveux souples et bien soignés.",
  "seoTitle": "Élixir Pousse Extrême Royal Crown | CBI",
  "seoDescription": "Découvrez l'Élixir Pousse Extrême Royal Crown chez BOUTIQUE CBI à Douala, Cameroun. Retrouvez nos soins capillaires pour votre routine beauté."
},
  {
  "id": 22,
  "name": "Gamme Royal Crown",
  "category": "Soins capillaires",
  "image": "assets/produits-capillaires-gamme-royal-crown.webp",
  "price": 25000,
  "description": "Découvrez la gamme capillaire Royal Crown chez BOUTIQUE CBI. Retrouvez une sélection de soins destinés à l'entretien et à la beauté des cheveux : baumes, élixirs et autres produits de soin capillaire. Une gamme pour composer une routine adaptée aux besoins de vos cheveux.",
  "seoTitle": "Gamme Royal Crown | Produits de soins capillaires CBI",
  "seoDescription": "Découvrez les produits capillaires Royal Crown chez BOUTIQUE CBI à Douala, Cameroun. Explorez notre sélection de soins pour les cheveux."
},
  {
  "id": 23,
  "name": "Leave-In Royal Crown",
  "category": "Soins capillaires",
  "image": "assets/produits-capillaires-leave-in-royal-crown.webp",
  "price": 5000,
  "description": "Découvrez le Leave-In Royal Crown, un soin sans rinçage destiné à compléter votre routine capillaire. Il aide à faciliter le coiffage, à assouplir les cheveux et à améliorer leur toucher. Adapté à une routine de soin et d'entretien de la fibre capillaire.",
  "seoTitle": "Leave-In Royal Crown | Soin capillaire sans rinçage",
  "seoDescription": "Retrouvez le Leave-In Royal Crown chez BOUTIQUE CBI à Douala, Cameroun. Découvrez ce soin sans rinçage pour faciliter le coiffage et entretenir vos cheveux."
},
  {
  "id": 24,
  "name": "Lotion Capillaire Royal Crown",
  "category": "Soins capillaires",
  "image": "assets/produits-capillaires-lotion-cappilaire-royal-crown.webp",
  "price": 5000,
  "description": "Découvrez la Lotion Capillaire Royal Crown, un soin destiné à compléter votre routine d'entretien des cheveux et du cuir chevelu. Sa texture lotion facilite l'application et permet d'intégrer ce produit dans vos habitudes de soins capillaires.",
  "seoTitle": "Lotion Capillaire Royal Crown | BOUTIQUE CBI",
  "seoDescription": "Découvrez la Lotion Capillaire Royal Crown chez BOUTIQUE CBI à Douala, Cameroun. Retrouvez nos produits pour l'entretien et la beauté des cheveux."
},
  {
  "id": 25,
  "name": "Masque Capillaire Royal Crown",
  "category": "Soins capillaires",
  "image": "assets/produits-capillaires-masque-cappillaire-royal-crown.webp",
  "price": 5000,
  "description": "Découvrez le Masque Capillaire Royal Crown, un soin destiné à compléter votre routine capillaire. Il aide à nourrir la fibre, à améliorer la douceur des cheveux et à faciliter leur démêlage. Un soin à intégrer dans l'entretien régulier des cheveux.",
  "seoTitle": "Masque Capillaire Royal Crown | Soin cheveux CBI",
  "seoDescription": "Retrouvez le Masque Capillaire Royal Crown chez BOUTIQUE CBI à Douala, Cameroun. Découvrez nos soins pour nourrir, adoucir et entretenir les cheveux."
},
  {
  "id": 26,
  "name": "Nadi 18",
  "category": "Soins capillaires",
  "image": "assets/produits-capillaires-nadi-18.webp",
  "price": 1000,
  "description": "Découvrez Nadi 18, une référence de la sélection de soins capillaires de BOUTIQUE CBI. Retrouvez nos produits dédiés à l'entretien et à la beauté des cheveux. Une gamme destinée à accompagner votre routine capillaire au quotidien.",
  "seoTitle": "Nadi 18 | Produits de soins capillaires CBI",
  "seoDescription": "Découvrez Nadi 18 chez BOUTIQUE CBI à Douala, Cameroun. Retrouvez notre sélection de produits pour l'entretien et la beauté des cheveux."
},
  {
  "id": 27,
  "name": "Sérum Capillaire Nadi Pro",
  "category": "Soins capillaires",
  "image": "assets/produits-capillaires-serum-cappilaire-nadi-pro.webp",
  "price": 5000,
  "description": "Découvrez le Sérum Capillaire Nadi Pro, un soin à intégrer dans votre routine de beauté des cheveux. Sa présentation en sérum permet une application ciblée pour accompagner l'entretien de la fibre capillaire et du cuir chevelu.",
  "seoTitle": "Sérum Capillaire Nadi Pro | BOUTIQUE CBI",
  "seoDescription": "Découvrez le Sérum Capillaire Nadi Pro chez BOUTIQUE CBI à Douala, Cameroun. Retrouvez notre sélection de soins capillaires."
},
  {
  "id": 28,
  "name": "Shampoing Antipelliculaire",
  "category": "Soins capillaires",
  "image": "assets/produits-capillaires-shampoing-antipelliculaire.webp",
  "price": 5000 et 10000,
  "description": "Découvrez notre shampoing antipelliculaire, un produit de soin capillaire conçu pour nettoyer les cheveux et aider à éliminer les pellicules visibles. Il accompagne l'entretien du cuir chevelu et contribue à laisser les cheveux propres et frais. Retrouvez-le chez BOUTIQUE CBI.",
  "seoTitle": "Shampoing Antipelliculaire | Soin du cuir chevelu CBI",
  "seoDescription": "Achetez votre shampoing antipelliculaire chez BOUTIQUE CBI à Douala, Cameroun. Découvrez notre sélection de soins pour nettoyer les cheveux et entretenir le cuir chevelu."
},
  {
  "id": 29,
  "name": "Shampoing Réparateur Royal Crown",
  "category": "Soins capillaires",
  "image": "assets/produits-capillaires-shampoing-reparateur-royal-crown.webp",
  "price": 5000,
  "description": "Découvrez le Shampoing Réparateur Royal Crown, un soin lavant destiné à nettoyer les cheveux tout en accompagnant l'entretien de la fibre capillaire. Il aide à laisser les cheveux propres, doux et faciles à coiffer. Retrouvez ce produit dans la gamme Royal Crown chez BOUTIQUE CBI.",
  "seoTitle": "Shampoing Réparateur Royal Crown | BOUTIQUE CBI",
  "seoDescription": "Découvrez le Shampoing Réparateur Royal Crown chez BOUTIQUE CBI à Douala, Cameroun. Un shampoing pour nettoyer et entretenir la fibre capillaire."
},
  {
    "id": 30,
    "name": "Deboucheur Faith Clean",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-deboucheur-faith-clean.webp",
    "price": 0
  },
  {
    "id": 31,
    "name": "Detartrant",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-detartrant.webp",
    "price": 0
  },
  {
    "id": 32,
    "name": "Detergent Liquide Faith Clean",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-detergent-liquide-faith-clean.webp",
    "price": 0
  },
  {
    "id": 33,
    "name": "Detergent Liquide",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-detergent-liquide.webp",
    "price": 0
  },
  {
    "id": 34,
    "name": "Eau De Javel",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-eau-de-javel.webp",
    "price": 0
  },
  {
    "id": 35,
    "name": "Lave Linge",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-lave-linge.webp",
    "price": 0
  },
  {
    "id": 36,
    "name": "Lave Mains",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-lave-mains.webp",
    "price": 0
  },
  {
    "id": 37,
    "name": "Lave Sol",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-lave-sol.webp",
    "price": 0
  },
  {
    "id": 38,
    "name": "Lave Vitre Faith Clean",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-lave-vitre-faith-clean.webp",
    "price": 0
  },
  {
    "id": 39,
    "name": "Liquide Vaisselle",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-liquide-vaisselle.webp",
    "price": 0
  },
  {
    "id": 40,
    "name": "Savon Liquide",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-savon-liquide.webp",
    "price": 0
  },
  {
    "id": 41,
    "name": "Souplne Faith Clean",
    "category": "Entretien & maison",
    "image": "assets/produits-d-entretien-et-de-menage-souplne-faith-clean.webp",
    "price": 0
  },
  {
    "id": 42,
    "name": "Black Diamont Eclaircissant",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-black-diamont-eclaircissant.webp",
    "price": 0
  },
  {
    "id": 43,
    "name": "Creme De Visage Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-creme-de-visage-fresh.webp",
    "price": 0
  },
  {
    "id": 44,
    "name": "Creme De Visage Nel'S Vente En Gros",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-creme-de-visage-nel-s-vente-en-gros.webp",
    "price": 0
  },
  {
    "id": 45,
    "name": "Creme De Visage Teint Parfait",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-creme-de-visage-teint-parfait.webp",
    "price": 0
  },
  {
    "id": 46,
    "name": "Gel De Douche Fresh Vente En Gros",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gel-de-douche-fresh-vente-en-gros.webp",
    "price": 0
  },
  {
    "id": 47,
    "name": "Gel Douche Clarifiant Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gel-douche-clarifiant-fresh.webp",
    "price": 0
  },
  {
    "id": 48,
    "name": "Gel Sparkle",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gel-sparkle.webp",
    "price": 0
  },
  {
    "id": 49,
    "name": "Gommage Corporel Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gommage-corporel-fresh.webp",
    "price": 0
  },
  {
    "id": 50,
    "name": "Gommage Eclaircissant Teint Parfait",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gommage-eclaircissant-teint-parfait.webp",
    "price": 0
  },
  {
    "id": 51,
    "name": "Gommage Tp",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gommage-tp.webp",
    "price": 0
  },
  {
    "id": 52,
    "name": "Gommage Visage Fresh Clarifiant",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-gommage-visage-fresh-clarifiant.webp",
    "price": 0
  },
  {
    "id": 53,
    "name": "Huile Glow Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-huile-glow-fresh.webp",
    "price": 0
  },
  {
    "id": 54,
    "name": "Huile Glow Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-huile-glow-fresh.webp",
    "price": 0
  },
  {
    "id": 55,
    "name": "Huile Glow Visage",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-huile-glow-visage.webp",
    "price": 0
  },
  {
    "id": 56,
    "name": "Lait Fresh Clarifiant",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-lait-fresh-clarifiant.webp",
    "price": 0
  },
  {
    "id": 57,
    "name": "Lait Teint Parfait",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-lait-teint-parfait.webp",
    "price": 0
  },
  {
    "id": 58,
    "name": "Lotion Et Creme Neils",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-lotion-et-creme-neils.webp",
    "price": 0
  },
  {
    "id": 59,
    "name": "Lotion Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-lotion-fresh.webp",
    "price": 0
  },
  {
    "id": 60,
    "name": "Lotion Tp",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-lotion-tp.webp",
    "price": 0
  },
  {
    "id": 61,
    "name": "Lumeora",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-lumeora.webp",
    "price": 0
  },
  {
    "id": 62,
    "name": "Mousse Tp",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-mousse-tp.webp",
    "price": 0
  },
  {
    "id": 63,
    "name": "Recherche Representation",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-recherche-representation.webp",
    "price": 0
  },
  {
    "id": 64,
    "name": "Savon Antiseptique King Nature",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-antiseptique-king-nature.webp",
    "price": 0
  },
  {
    "id": 65,
    "name": "Savon Black Diamand Vente En Gros",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-black-diamand-vente-en-gros.webp",
    "price": 0
  },
  {
    "id": 66,
    "name": "Savon Clarifiant Fresh",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-clarifiant-fresh.webp",
    "price": 0
  },
  {
    "id": 67,
    "name": "Savon Eclaircissant Teint Parfait",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-eclaircissant-teint-parfait.webp",
    "price": 0
  },
  {
    "id": 68,
    "name": "Savon Golden Glow Curcuma",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-golden-glow-curcuma.webp",
    "price": 0
  },
  {
    "id": 69,
    "name": "Savon Golden Glow Tomate",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-golden-glow-tomate.webp",
    "price": 0
  },
  {
    "id": 70,
    "name": "Savon Golden Glow Vente En Gros",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-golden-glow-vente-en-gros.webp",
    "price": 0
  },
  {
    "id": 71,
    "name": "Savon Golden Glow",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-golden-glow.webp",
    "price": 0
  },
  {
    "id": 72,
    "name": "Savon Lumeora Vente En Gros",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-lumeora-vente-en-gros.webp",
    "price": 0
  },
  {
    "id": 73,
    "name": "Savon Lumeora",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-lumeora.webp",
    "price": 0
  },
  {
    "id": 74,
    "name": "Savon Sparkle",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-sparkle.webp",
    "price": 0
  },
  {
    "id": 75,
    "name": "Savon Super Eclaircissant",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-super-eclaircissant.webp",
    "price": 0
  },
  {
    "id": 76,
    "name": "Savon Teint Parfait",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-teint-parfait.webp",
    "price": 0
  },
  {
    "id": 77,
    "name": "Savon Traitant A La Spiruline",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-savon-traitant-a-la-spiruline.webp",
    "price": 0
  },
  {
    "id": 78,
    "name": "Serum Tp",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-serum-tp.webp",
    "price": 0
  },
  {
    "id": 79,
    "name": "Sparkle Eclaircissant",
    "category": "Soins visage & corps",
    "image": "assets/produits-de-soin-corporel-et-de-visage-sparkle-eclaircissant.webp",
    "price": 0
  }
];

// ==========================================
// DESCRIPTIONS ET REFERENCEMENT DES PRODUITS
// BOUTIQUE CBI - DOUALA, CAMEROUN
// ==========================================

const SEO_TEMPLATES = {
  "Formations & livres": (name) =>
    `${name} : découvrez les ressources et formations professionnelles proposées par CBI pour développer vos compétences en cosmétique, dermocosmétique et chimie industrielle au Cameroun.`,

  "Parfumerie": (name) =>
    `${name} : découvrez notre sélection de parfums et produits de parfumerie chez BOUTIQUE CBI. Consultez les disponibilités et contactez-nous pour commander à Douala ou ailleurs au Cameroun.`,

  "Soins capillaires": (name) =>
    `${name} : découvrez ce produit de soin capillaire dans notre sélection CBI. Retrouvez des solutions pour compléter votre routine d'entretien des cheveux. Commandes disponibles au Cameroun.`,

  "Entretien & maison": (name) =>
    `${name} : découvrez notre sélection de produits d'entretien et d'hygiène pour la maison. Retrouvez les produits Faith Clean et autres références chez BOUTIQUE CBI à Douala, Cameroun.`,

  "Soins visage & corps": (name) =>
    `${name} : découvrez ce produit de soin du visage et du corps dans notre sélection BOUTIQUE CBI. Consultez les disponibilités et les conseils d'utilisation avant votre achat.`
};

// Création des descriptions et mots-clés
PRODUCTS.forEach((product) => {
  const template = SEO_TEMPLATES[product.category];

  product.description = template
    ? template(product.name)
    : `Découvrez ${product.name} chez BOUTIQUE CBI au Cameroun.`;

  product.keywords = [
    product.name,
    product.category,
    "CBI",
    "GPSCL SARL",
    "Boutique cosmétique Cameroun",
    "Douala Cameroun",
    "Achat en ligne Cameroun"
  ].join(", ");

  product.imageAlt =
    `${product.name} - ${product.category} - BOUTIQUE CBI Cameroun`;
});
