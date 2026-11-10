const PRODUCTS = [
  {
  "id": 1,
  "name": "Flyer Formation en Cosmétique",
  "category": "Formations & livres",
  "image": "assets/formation-professionnelle-flyer-formation-en-cosmetique.webp",
  "price": 0,
  "description": "Découvrez nos formations professionnelles en cosmétique avec IFPCBI. Développez vos connaissances en formulation cosmétique, fabrication de produits et bonnes pratiques de laboratoire grâce à une approche pédagogique orientée vers le savoir-faire.",
  "seoTitle": "Formation professionnelle en cosmétique | IFPCBI",
  "seoDescription": "Découvrez les formations en cosmétique proposées par IFPCBI à Douala, Cameroun. Apprenez la formulation et la fabrication de produits cosmétiques."
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
  "price": 0,
"priceOptions": [5000, 10000],
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
  "name": "Déboucheur Faith Clean",
  "category": "Entretien & maison",
  "image": "assets/produits-d-entretien-et-de-menage-deboucheur-faith-clean.webp",
  "price": 3000,
  "description": "Le déboucheur Faith Clean est un produit d’entretien destiné à faciliter le débouchage des canalisations et des conduits obstrués. Retrouvez-le dans la catégorie Entretien & maison de BOUTIQUE CBI.",
  "seoTitle": "Déboucheur Faith Clean | Entretien et maison – BOUTIQUE CBI",
  "seoDescription": "Découvrez le déboucheur Faith Clean chez BOUTIQUE CBI, votre boutique de produits d’entretien et de ménage au Cameroun."
},
  {
  "id": 31,
  "name": "Détartrant",
  "category": "Entretien & maison",
  "image": "assets/produits-d-entretien-et-de-menage-detartrant.webp",
  "price": 3000,
  "description": "Le détartrant est un produit d’entretien conçu pour aider à éliminer les dépôts de tartre sur les surfaces et équipements compatibles. Il contribue à l’entretien et à la propreté de la maison. Consultez les instructions d’utilisation avant emploi.",
  "seoTitle": "Détartrant pour la maison | Entretien – BOUTIQUE CBI",
  "seoDescription": "Découvrez le détartrant dans la catégorie Entretien & maison de BOUTIQUE CBI, votre boutique de produits d’entretien au Cameroun."
},
  {
  "id": 32,
  "name": "Détergent Liquide Faith Clean",
  "category": "Entretien & maison",
  "image": "assets/produits-d-entretien-et-de-menage-detergent-liquide-faith-clean.webp",
  "price": 1500,
  "description": "Le détergent liquide Faith Clean est un produit destiné au nettoyage et à l’entretien courant de la maison. Sa présentation liquide facilite son dosage selon les indications figurant sur l’emballage. Retrouvez-le dans la catégorie Entretien & maison de BOUTIQUE CBI.",
  "seoTitle": "Détergent Liquide Faith Clean | BOUTIQUE CBI",
  "seoDescription": "Découvrez le détergent liquide Faith Clean chez BOUTIQUE CBI, votre boutique de produits d’entretien et de ménage au Cameroun."
},
  {
  "id": 33,
  "name": "Détergent Liquide",
  "category": "Entretien & maison",
  "image": "assets/produits-d-entretien-et-de-menage-detergent-liquide.webp",
  "price": 1500,
  "description": "Le détergent liquide est un produit destiné au nettoyage et à l’entretien courant. Il s’intègre aux produits de la catégorie Entretien & maison de BOUTIQUE CBI. Consultez les indications figurant sur l’emballage pour connaître les surfaces ou usages adaptés.",
  "seoTitle": "Détergent Liquide | Produit d’entretien – BOUTIQUE CBI",
  "seoDescription": "Retrouvez le détergent liquide chez BOUTIQUE CBI, votre boutique de produits d’entretien et de ménage au Cameroun."
},
  {
  "id": 34,
  "name": "Eau de Javel",
  "category": "Entretien & maison",
  "image": "assets/produits-d-entretien-et-de-menage-eau-de-javel.webp",
  "price": 1000,
  "description": "L’eau de Javel est un produit d’entretien utilisé pour la désinfection et le blanchiment, selon sa concentration et les usages indiqués sur l’emballage. Respectez les précautions d’emploi. Ne jamais la mélanger avec un détartrant, un acide ou un produit contenant de l’ammoniaque.",
  "seoTitle": "Eau de Javel | Produit d’entretien – BOUTIQUE CBI",
  "seoDescription": "Découvrez l’eau de Javel chez BOUTIQUE CBI, votre boutique de produits d’entretien et de ménage au Cameroun. Consultez les précautions d’emploi avant utilisation."
},
  {
  "id": 35,
  "name": "Lave-linge",
  "category": "Entretien & maison",
  "image": "assets/produits-d-entretien-et-de-menage-lave-linge.webp",
  "price": 2500,
  "description": "Produit d’entretien destiné à accompagner le lavage du linge. Retrouvez-le dans la catégorie Entretien & maison de BOUTIQUE CBI. Consultez les indications sur l’emballage pour connaître le dosage recommandé et les textiles compatibles.",
  "seoTitle": "Lave-linge | Produit pour l’entretien du linge – BOUTIQUE CBI",
  "seoDescription": "Découvrez le produit Lave-linge chez BOUTIQUE CBI au Cameroun, dans notre sélection de produits d’entretien et de nettoyage du linge."
},
  {
  "id": 36,
  "name": "Lave-mains",
  "category": "Entretien & maison",
  "image": "assets/produits-d-entretien-et-de-menage-lave-mains.webp",
  "price": 1500,
  "description": "Le lave-mains est un produit destiné au nettoyage des mains au quotidien. Il s’intègre à la sélection de produits d’hygiène et d’entretien de BOUTIQUE CBI. Consultez les indications figurant sur l’emballage pour connaître le mode d’utilisation recommandé.",
  "seoTitle": "Lave-mains | Produit d’hygiène – BOUTIQUE CBI",
  "seoDescription": "Découvrez le lave-mains chez BOUTIQUE CBI au Cameroun, dans notre sélection de produits d’hygiène et d’entretien."
},
  {
  "id": 37,
  "name": "Lave-sol",
  "category": "Entretien & maison",
  "image": "assets/produits-d-entretien-et-de-menage-lave-sol.webp",
  "price": 2500,
  "description": "Le lave-sol est un produit d’entretien destiné au nettoyage des sols. Il accompagne l’entretien régulier des surfaces compatibles pour contribuer à la propreté de votre maison ou de vos locaux. Respectez les indications d’utilisation figurant sur l’emballage.",
  "seoTitle": "Lave-sol | Produit de nettoyage des sols – BOUTIQUE CBI",
  "seoDescription": "Découvrez le lave-sol chez BOUTIQUE CBI au Cameroun. Retrouvez notre sélection de produits d’entretien et de nettoyage pour la maison et les locaux."
},
  {
  "id": 38,
  "name": "Lave-vitre Faith Clean",
  "category": "Entretien & maison",
  "image": "assets/produits-d-entretien-et-de-menage-lave-vitre-faith-clean.webp",
  "price": 1500,
  "description": "Le lave-vitre Faith Clean est un produit d’entretien destiné au nettoyage des vitres et des surfaces vitrées compatibles. Il aide à retirer les traces et les salissures pour entretenir vos fenêtres, miroirs et autres surfaces adaptées. Respectez les consignes d’utilisation figurant sur l’emballage.",
  "seoTitle": "Lave-vitre Faith Clean | Nettoyage des vitres – BOUTIQUE CBI",
  "seoDescription": "Découvrez le lave-vitre Faith Clean chez BOUTIQUE CBI au Cameroun. Un produit d’entretien pour le nettoyage des vitres et surfaces vitrées compatibles."
},
  {
  "id": 39,
  "name": "Liquide Vaisselle",
  "category": "Entretien & maison",
  "image": "assets/produits-d-entretien-et-de-menage-liquide-vaisselle.webp",
  "price": 0,
  "description": "Le liquide vaisselle est un produit d’entretien destiné au lavage manuel de la vaisselle. Il aide à nettoyer les assiettes, verres, casseroles et ustensiles de cuisine. Respectez les indications de dosage et les précautions d’emploi figurant sur l’emballage.",
  "seoTitle": "Liquide Vaisselle | Produit de nettoyage – BOUTIQUE CBI",
  "seoDescription": "Découvrez le liquide vaisselle chez BOUTIQUE CBI au Cameroun. Retrouvez nos produits d’entretien pour le lavage de la vaisselle et la propreté de la cuisine."
},
  {
  "id": 40,
  "name": "Savon Liquide",
  "category": "Entretien & maison",
  "image": "assets/produits-d-entretien-et-de-menage-savon-liquide.webp",
  "price": 2500,
  "description": "Le savon liquide est un produit destiné au nettoyage et à l’hygiène au quotidien. Il s’utilise selon sa formulation et les indications figurant sur son emballage. Retrouvez-le dans la catégorie Entretien & maison de BOUTIQUE CBI.",
  "seoTitle": "Savon Liquide | Hygiène et entretien – BOUTIQUE CBI",
  "seoDescription": "Découvrez le savon liquide chez BOUTIQUE CBI au Cameroun. Retrouvez notre sélection de produits d’hygiène et d’entretien pour un usage quotidien."
},
  {
  "id": 41,
  "name": "Soupline Faith Clean",
  "category": "Entretien & maison",
  "image": "assets/produits-d-entretien-et-de-menage-souplne-faith-clean.webp",
  "price": 0,
  "description": "La Soupline Faith Clean est un produit destiné à l’entretien du linge. Elle accompagne le lavage pour apporter de la souplesse aux textiles, selon les indications d’utilisation figurant sur l’emballage.",
  "seoTitle": "Soupline Faith Clean | Entretien du linge – BOUTIQUE CBI",
  "seoDescription": "Découvrez Soupline Faith Clean chez BOUTIQUE CBI au Cameroun, dans notre sélection de produits d’entretien et de soin du linge."
},
{
  "id": 42,
  "name": "Black Diamond Éclaircissant",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-black-diamont-eclaircissant.webp",
  "price": 0,
  "description": "Black Diamond Éclaircissant est un produit de soin cosmétique destiné à l'entretien de la peau. Découvrez ce produit dans la catégorie Soins visage & corps de BOUTIQUE CBI. Consultez sa composition, ses précautions d'emploi et les indications du fabricant avant utilisation.",
  "seoTitle": "Black Diamond Éclaircissant | Soin visage et corps – BOUTIQUE CBI",
  "seoDescription": "Découvrez Black Diamond Éclaircissant chez BOUTIQUE CBI au Cameroun. Retrouvez notre sélection de produits cosmétiques pour les soins du visage et du corps."
},
 {
  "id": 43,
  "name": "Crème de Visage Fresh",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-creme-de-visage-fresh.webp",
  "price": 0,
  "description": "La crème de visage Fresh est un produit cosmétique destiné aux soins quotidiens du visage. Retrouvez-la dans la gamme de soins visage et corps de BOUTIQUE CBI. Consultez sa composition et les conseils d'utilisation avant emploi.",
  "seoTitle": "Crème de Visage Fresh | Soin du visage – BOUTIQUE CBI",
  "seoDescription": "Découvrez la crème de visage Fresh chez BOUTIQUE CBI au Cameroun, votre boutique de produits cosmétiques et de soins du visage."
},
{
  "id": 44,
  "name": "Crème de Visage Nel'S – Vente en Gros",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-creme-de-visage-nel-s-vente-en-gros.webp",
  "price": 0,
  "description": "La crème de visage Nel'S est proposée dans une offre destinée à la vente en gros. Découvrez cette référence cosmétique dans la sélection de BOUTIQUE CBI. Pour les conditions de commande et les quantités disponibles, contactez notre équipe.",
  "seoTitle": "Crème de Visage Nel'S en Gros | BOUTIQUE CBI",
  "seoDescription": "Retrouvez la crème de visage Nel'S en vente en gros chez BOUTIQUE CBI au Cameroun. Contactez-nous pour vos commandes et renseignements."
},
{
  "id": 45,
  "name": "Crème de Visage Teint Parfait",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-creme-de-visage-teint-parfait.webp",
  "price": 0,
  "description": "La crème de visage Teint Parfait est un produit cosmétique de soin du visage. Retrouvez cette référence dans la sélection Teint Parfait de BOUTIQUE CBI. Vérifiez la composition, les précautions et les conseils d'utilisation avant emploi.",
  "seoTitle": "Crème de Visage Teint Parfait | BOUTIQUE CBI",
  "seoDescription": "Découvrez la crème de visage Teint Parfait chez BOUTIQUE CBI au Cameroun, dans notre gamme de soins cosmétiques pour le visage."
},
{
  "id": 46,
  "name": "Gel de Douche Fresh – Vente en Gros",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-gel-de-douche-fresh-vente-en-gros.webp",
  "price": 0,
  "description": "Le gel de douche Fresh est un produit destiné à l'hygiène corporelle. Cette référence est proposée en vente en gros chez BOUTIQUE CBI. Contactez-nous pour connaître les conditions de commande et les disponibilités.",
  "seoTitle": "Gel de Douche Fresh en Gros | BOUTIQUE CBI",
  "seoDescription": "Commandez le gel de douche Fresh en gros chez BOUTIQUE CBI au Cameroun. Contactez notre équipe pour les informations sur les commandes."
},
{
  "id": 47,
  "name": "Gel Douche Clarifiant Fresh",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-gel-douche-clarifiant-fresh.webp",
  "price": 0,
  "description": "Le gel douche clarifiant Fresh est un produit cosmétique destiné à l'hygiène corporelle. Retrouvez-le dans la gamme Fresh de BOUTIQUE CBI. Consultez la composition et les précautions d'utilisation avant emploi.",
  "seoTitle": "Gel Douche Clarifiant Fresh | BOUTIQUE CBI",
  "seoDescription": "Découvrez le gel douche clarifiant Fresh chez BOUTIQUE CBI au Cameroun, dans notre sélection de produits de soin corporel."
},
{
  "id": 48,
  "name": "Gel Sparkle",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-gel-sparkle.webp",
  "price": 0,
  "description": "Gel Sparkle est une référence de la catégorie Soins visage & corps de BOUTIQUE CBI. Retrouvez ce produit dans notre sélection de cosmétiques. Consultez son étiquetage pour connaître son usage, sa composition et ses précautions d'emploi.",
  "seoTitle": "Gel Sparkle | Produit cosmétique – BOUTIQUE CBI",
  "seoDescription": "Retrouvez Gel Sparkle chez BOUTIQUE CBI au Cameroun. Découvrez notre sélection de produits cosmétiques pour les soins du visage et du corps."
},
{
  "id": 49,
  "name": "Gommage Corporel Fresh",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-gommage-corporel-fresh.webp",
  "price": 0,
  "description": "Le gommage corporel Fresh est un produit cosmétique destiné à l'exfoliation de la peau du corps. Utilisez-le conformément aux indications du fabricant et évitez les zones irritées ou sensibilisées.",
  "seoTitle": "Gommage Corporel Fresh | Exfoliant pour le corps – BOUTIQUE CBI",
  "seoDescription": "Découvrez le gommage corporel Fresh chez BOUTIQUE CBI au Cameroun, dans notre sélection de produits cosmétiques pour le corps."
},
{
  "id": 50,
  "name": "Gommage Éclaircissant Teint Parfait",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-gommage-eclaircissant-teint-parfait.webp",
  "price": 0,
  "description": "Le gommage Teint Parfait est un produit cosmétique exfoliant destiné aux soins du corps. Cette référence est présentée dans la gamme Teint Parfait de BOUTIQUE CBI. Respectez les conseils d'utilisation et les précautions figurant sur son emballage.",
  "seoTitle": "Gommage Teint Parfait | Soin exfoliant – BOUTIQUE CBI",
  "seoDescription": "Retrouvez le gommage Teint Parfait chez BOUTIQUE CBI au Cameroun. Découvrez notre sélection de produits exfoliants pour les soins corporels."
},
{
  "id": 51,
  "name": "Gommage TP",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-gommage-tp.webp",
  "price": 0,
  "description": "Le gommage TP est une référence cosmétique de la catégorie Soins visage & corps. Retrouvez-le dans la sélection de BOUTIQUE CBI. Consultez son étiquetage pour connaître les zones d'application et les recommandations d'utilisation.",
  "seoTitle": "Gommage TP | Produit exfoliant – BOUTIQUE CBI",
  "seoDescription": "Découvrez le gommage TP chez BOUTIQUE CBI au Cameroun, dans notre sélection de produits cosmétiques pour les soins de la peau."
},
{
  "id": 52,
  "name": "Gommage Visage Fresh Clarifiant",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-gommage-visage-fresh-clarifiant.webp",
  "price": 0,
  "description": "Le gommage visage Fresh Clarifiant est un produit cosmétique destiné à l'exfoliation du visage. Utilisez-le selon les recommandations du fabricant, en évitant le contour des yeux et les zones irritées.",
  "seoTitle": "Gommage Visage Fresh Clarifiant | BOUTIQUE CBI",
  "seoDescription": "Découvrez le gommage visage Fresh Clarifiant chez BOUTIQUE CBI au Cameroun, dans notre gamme de produits exfoliants pour le visage."
},
{
  "id": 53,
  "name": "Huile Glow Fresh",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-huile-glow-fresh.webp",
  "price": 0,
  "description": "L'huile Glow Fresh est une référence cosmétique de la gamme Fresh, proposée dans la catégorie Soins visage & corps. Consultez son étiquetage pour connaître sa composition, ses zones d'application et les conseils d'utilisation.",
  "seoTitle": "Huile Glow Fresh | Soin cosmétique – BOUTIQUE CBI",
  "seoDescription": "Retrouvez l'huile Glow Fresh chez BOUTIQUE CBI au Cameroun. Découvrez notre sélection de produits cosmétiques pour les soins de la peau."
},
{
  "id": 54,
  "name": "Huile Glow Fresh",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-huile-glow-fresh.webp",
  "price": 0,
  "description": "L'huile Glow Fresh est une référence de la gamme Fresh dans la sélection de soins visage et corps de BOUTIQUE CBI. Pour connaître ses caractéristiques et son mode d'utilisation, consultez les informations figurant sur son emballage.",
  "seoTitle": "Huile Glow Fresh | Produit de soin – BOUTIQUE CBI",
  "seoDescription": "Découvrez l'huile Glow Fresh chez BOUTIQUE CBI au Cameroun. Retrouvez cette référence dans notre sélection de produits de soin cosmétique."
},
{
  "id": 55,
  "name": "Huile Glow Visage",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-huile-glow-visage.webp",
  "price": 0,
  "description": "L'huile Glow Visage est un produit cosmétique destiné aux soins du visage. Retrouvez cette référence dans la sélection de BOUTIQUE CBI. Vérifiez les indications du fabricant avant application, notamment pour les peaux sensibles.",
  "seoTitle": "Huile Glow Visage | Soin du visage – BOUTIQUE CBI",
  "seoDescription": "Découvrez l'huile Glow Visage chez BOUTIQUE CBI au Cameroun, dans notre sélection de produits cosmétiques pour le visage."
},
{
  "id": 56,
  "name": "Lait Fresh Clarifiant",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-lait-fresh-clarifiant.webp",
  "price": 0,
  "description": "Le lait Fresh Clarifiant est un produit cosmétique destiné aux soins de la peau. Il appartient à la gamme Fresh de BOUTIQUE CBI. Consultez sa composition et les recommandations du fabricant avant utilisation.",
  "seoTitle": "Lait Fresh Clarifiant | Soin corporel – BOUTIQUE CBI",
  "seoDescription": "Découvrez le lait Fresh Clarifiant chez BOUTIQUE CBI au Cameroun, dans notre sélection de laits et produits cosmétiques pour la peau."
},
{
  "id": 57,
  "name": "Lait Teint Parfait",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-lait-teint-parfait.webp",
  "price": 0,
  "description": "Le lait Teint Parfait est un produit cosmétique de soin corporel appartenant à la gamme Teint Parfait. Retrouvez cette référence chez BOUTIQUE CBI et consultez les indications du fabricant pour son utilisation.",
  "seoTitle": "Lait Teint Parfait | Soin de la peau – BOUTIQUE CBI",
  "seoDescription": "Retrouvez le lait Teint Parfait chez BOUTIQUE CBI au Cameroun. Découvrez notre sélection de produits cosmétiques pour le soin du corps."
},
{
  "id": 58,
  "name": "Lotion et Crème Nel'S",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-lotion-et-creme-neils.webp",
  "price": 0,
  "description": "La lotion et la crème Nel'S sont des références cosmétiques proposées dans la catégorie Soins visage & corps de BOUTIQUE CBI. Consultez les emballages pour connaître les caractéristiques et les conseils d'utilisation de chaque produit.",
  "seoTitle": "Lotion et Crème Nel'S | Soins cosmétiques – BOUTIQUE CBI",
  "seoDescription": "Découvrez la lotion et la crème Nel'S chez BOUTIQUE CBI au Cameroun, dans notre sélection de produits de soin visage et corps."
},
{
  "id": 59,
  "name": "Lotion Fresh",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-lotion-fresh.webp",
  "price": 0,
  "description": "La lotion Fresh est un produit cosmétique de la gamme Fresh, disponible dans la sélection Soins visage & corps de BOUTIQUE CBI. Consultez son étiquetage pour connaître son usage et ses recommandations d'application.",
  "seoTitle": "Lotion Fresh | Produit de soin – BOUTIQUE CBI",
  "seoDescription": "Découvrez la lotion Fresh chez BOUTIQUE CBI au Cameroun, votre boutique de produits cosmétiques et de soins de la peau."
},
{
  "id": 60,
  "name": "Lotion TP",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-lotion-tp.webp",
  "price": 0,
  "description": "La lotion TP est une référence cosmétique de la catégorie Soins visage & corps. Retrouvez-la dans la sélection de BOUTIQUE CBI. Pour connaître ses caractéristiques et son mode d'emploi, reportez-vous aux informations du fabricant.",
  "seoTitle": "Lotion TP | Soin cosmétique – BOUTIQUE CBI",
  "seoDescription": "Retrouvez la lotion TP chez BOUTIQUE CBI au Cameroun, dans notre sélection de produits cosmétiques pour les soins de la peau."
},
{
  "id": 61,
  "name": "Lumeora",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-lumeora.webp",
  "price": 0,
  "description": "Lumeora est une référence de la catégorie Soins visage & corps de BOUTIQUE CBI. Découvrez ce produit dans notre sélection cosmétique et consultez son emballage pour connaître sa fonction, sa composition et ses précautions d'utilisation.",
  "seoTitle": "Lumeora | Produit cosmétique – BOUTIQUE CBI",
  "seoDescription": "Découvrez Lumeora chez BOUTIQUE CBI au Cameroun. Retrouvez notre sélection de produits cosmétiques et de soins visage et corps."
},
{
  "id": 62,
  "name": "Mousse TP",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-mousse-tp.webp",
  "price": 0,
  "description": "La mousse TP est une référence cosmétique de la gamme Teint Parfait. Retrouvez-la dans la catégorie Soins visage & corps de BOUTIQUE CBI. Consultez les indications du fabricant pour connaître son utilisation.",
  "seoTitle": "Mousse TP | Gamme Teint Parfait – BOUTIQUE CBI",
  "seoDescription": "Découvrez la mousse TP chez BOUTIQUE CBI au Cameroun, dans notre sélection de produits cosmétiques de la gamme Teint Parfait."
},
{
  "id": 63,
  "name": "Recherche de Représentation",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-recherche-representation.webp",
  "price": 0,
  "description": "CBI recherche des personnes intéressées par la représentation et la distribution de ses produits. Cette annonce figure dans la rubrique Soins visage & corps de BOUTIQUE CBI. Contactez notre équipe pour obtenir les conditions de collaboration.",
  "seoTitle": "Recherche de Représentants | CBI Cameroun – BOUTIQUE CBI",
  "seoDescription": "Vous souhaitez devenir représentant des produits CBI au Cameroun ? Contactez BOUTIQUE CBI pour obtenir des informations sur les possibilités de collaboration."
},
{
  "id": 64,
  "name": "Savon Antiseptique King Nature",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-savon-antiseptique-king-nature.webp",
  "price": 0,
  "description": "Le savon King Nature est présenté comme un savon antiseptique dans la gamme de soins de BOUTIQUE CBI. Consultez sa composition, son statut réglementaire et les précautions d'utilisation figurant sur son emballage.",
  "seoTitle": "Savon Antiseptique King Nature | BOUTIQUE CBI",
  "seoDescription": "Découvrez le savon antiseptique King Nature chez BOUTIQUE CBI au Cameroun. Consultez les informations du fabricant avant utilisation."
},
{
  "id": 65,
  "name": "Savon Black Diamond – Vente en Gros",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-savon-black-diamand-vente-en-gros.webp",
  "price": 0,
  "description": "Le savon Black Diamond est proposé dans une offre de vente en gros chez BOUTIQUE CBI. Retrouvez cette référence dans notre sélection de produits cosmétiques. Contactez-nous pour connaître les quantités et les conditions de commande.",
  "seoTitle": "Savon Black Diamond en Gros | BOUTIQUE CBI",
  "seoDescription": "Retrouvez le savon Black Diamond en vente en gros chez BOUTIQUE CBI au Cameroun. Contactez-nous pour vos commandes et renseignements."
},
{
  "id": 66,
  "name": "Savon Clarifiant Fresh",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-savon-clarifiant-fresh.webp",
  "price": 0,
  "description": "Le savon clarifiant Fresh est un produit cosmétique destiné à l'hygiène et aux soins de la peau. Il appartient à la gamme Fresh de BOUTIQUE CBI. Consultez sa composition et les précautions d'emploi avant utilisation.",
  "seoTitle": "Savon Clarifiant Fresh | Soin de la peau – BOUTIQUE CBI",
  "seoDescription": "Découvrez le savon clarifiant Fresh chez BOUTIQUE CBI au Cameroun, dans notre sélection de savons et produits cosmétiques."
},
{
  "id": 67,
  "name": "Savon Éclaircissant Teint Parfait",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-savon-eclaircissant-teint-parfait.webp",
  "price": 0,
  "description": "Le savon Teint Parfait est une référence cosmétique présentée comme éclaircissante. Retrouvez-le dans la gamme Teint Parfait de BOUTIQUE CBI. Vérifiez sa composition, les précautions et les recommandations du fabricant avant utilisation.",
  "seoTitle": "Savon Éclaircissant Teint Parfait | BOUTIQUE CBI",
  "seoDescription": "Retrouvez le savon Teint Parfait chez BOUTIQUE CBI au Cameroun, dans notre sélection de savons et de produits cosmétiques."
},
{
  "id": 68,
  "name": "Savon Golden Glow Curcuma",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-savon-golden-glow-curcuma.webp",
  "price": 0,
  "description": "Le savon Golden Glow Curcuma est une référence cosmétique de la gamme Golden Glow, associée au curcuma. Découvrez ce produit chez BOUTIQUE CBI et consultez son étiquetage pour connaître sa composition complète et ses conseils d'utilisation.",
  "seoTitle": "Savon Golden Glow Curcuma | BOUTIQUE CBI",
  "seoDescription": "Découvrez le savon Golden Glow au curcuma chez BOUTIQUE CBI au Cameroun, dans notre sélection de savons cosmétiques."
},
{
  "id": 69,
  "name": "Savon Golden Glow Tomate",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-savon-golden-glow-tomate.webp",
  "price": 0,
  "description": "Le savon Golden Glow Tomate est une référence cosmétique de la gamme Golden Glow, associée à la tomate. Retrouvez-le chez BOUTIQUE CBI et consultez son emballage pour connaître sa composition et les recommandations d'utilisation.",
  "seoTitle": "Savon Golden Glow Tomate | BOUTIQUE CBI",
  "seoDescription": "Retrouvez le savon Golden Glow à la tomate chez BOUTIQUE CBI au Cameroun, dans notre gamme de savons et produits de soin."
},
{
  "id": 70,
  "name": "Savon Golden Glow – Vente en Gros",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-savon-golden-glow-vente-en-gros.webp",
  "price": 0,
  "description": "Le savon Golden Glow est proposé en vente en gros chez BOUTIQUE CBI. Cette référence appartient à notre sélection de produits cosmétiques. Contactez notre équipe pour connaître les quantités disponibles et les conditions de commande.",
  "seoTitle": "Savon Golden Glow en Gros | BOUTIQUE CBI",
  "seoDescription": "Commandez le savon Golden Glow en gros chez BOUTIQUE CBI au Cameroun. Contactez-nous pour connaître les conditions de vente."
},
{
  "id": 71,
  "name": "Savon Golden Glow",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-savon-golden-glow.webp",
  "price": 0,
  "description": "Le savon Golden Glow est un produit cosmétique de la gamme Golden Glow, disponible dans la sélection de BOUTIQUE CBI. Consultez les informations figurant sur son emballage pour connaître sa composition et ses conseils d'utilisation.",
  "seoTitle": "Savon Golden Glow | Produit cosmétique – BOUTIQUE CBI",
  "seoDescription": "Découvrez le savon Golden Glow chez BOUTIQUE CBI au Cameroun, dans notre sélection de savons et de produits de soin."
},
{
  "id": 75,
  "name": "Savon Super Éclaircissant",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-savon-super-eclaircissant.webp",
  "price": 0,
  "description": "Le savon Super Éclaircissant est une référence cosmétique destinée aux soins de la peau. Retrouvez-le dans la sélection de BOUTIQUE CBI. Consultez sa composition et les précautions d'utilisation avant emploi.",
  "seoTitle": "Savon Super Éclaircissant | BOUTIQUE CBI",
  "seoDescription": "Découvrez le savon Super Éclaircissant chez BOUTIQUE CBI au Cameroun, dans notre sélection de savons et produits cosmétiques."
},
{
  "id": 76,
  "name": "Savon Teint Parfait",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-savon-teint-parfait.webp",
  "price": 0,
  "description": "Le savon Teint Parfait est un produit cosmétique de la gamme Teint Parfait. Retrouvez cette référence dans la sélection de BOUTIQUE CBI. Consultez l'étiquetage pour connaître sa composition et ses recommandations d'utilisation.",
  "seoTitle": "Savon Teint Parfait | Soin cosmétique – BOUTIQUE CBI",
  "seoDescription": "Retrouvez le savon Teint Parfait chez BOUTIQUE CBI au Cameroun, dans notre gamme de savons et produits de soin."
},
{
  "id": 77,
  "name": "Savon Traitant à la Spiruline",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-savon-traitant-a-la-spiruline.webp",
  "price": 0,
  "description": "Le savon à la spiruline est une référence cosmétique de la catégorie Soins visage & corps. Découvrez ce produit chez BOUTIQUE CBI. Consultez sa composition complète et les indications du fabricant avant utilisation.",
  "seoTitle": "Savon à la Spiruline | Soin cosmétique – BOUTIQUE CBI",
  "seoDescription": "Découvrez le savon à la spiruline chez BOUTIQUE CBI au Cameroun, dans notre sélection de savons et produits cosmétiques."
},
{
  "id": 78,
  "name": "Sérum TP",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-serum-tp.webp",
  "price": 0,
  "description": "Le sérum TP est une référence cosmétique de la gamme Teint Parfait. Retrouvez-le dans la sélection de BOUTIQUE CBI. Consultez son étiquetage pour connaître ses actifs, son utilisation et les précautions à respecter.",
  "seoTitle": "Sérum TP | Gamme Teint Parfait – BOUTIQUE CBI",
  "seoDescription": "Découvrez le sérum TP chez BOUTIQUE CBI au Cameroun, dans notre sélection de sérums et produits cosmétiques pour la peau."
},
{
  "id": 79,
  "name": "Sparkle Éclaircissant",
  "category": "Soins visage & corps",
  "image": "assets/produits-de-soin-corporel-et-de-visage-sparkle-eclaircissant.webp",
  "price": 0,
  "description": "Sparkle Éclaircissant est une référence cosmétique de la catégorie Soins visage & corps de BOUTIQUE CBI. Retrouvez ce produit dans notre sélection et consultez les informations du fabricant concernant sa composition et ses conditions d'utilisation.",
  "seoTitle": "Sparkle Éclaircissant | Produit cosmétique – BOUTIQUE CBI",
  "seoDescription": "Découvrez Sparkle Éclaircissant chez BOUTIQUE CBI au Cameroun, dans notre sélection de produits cosmétiques pour les soins de la peau."
},
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
console.log("Catalogue CBI chargé :", PRODUCTS.length, "produits");