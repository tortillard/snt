# Activité HTML et CSS  

## Introduction  

Afin de créer une page Web on peut utiliser plusieurs langages. Les premiers et les plus utilisés sont les langages __HTML et CSS__.  


## Création de page Web  

Pour créer une page web il suffit simplement de créer un fichier avec l'extension `.html`, par exemple `mon_site.html`.  
Une fois le fichier crée, on peut __écrire dans un éditeur de texte(code)__ notre code HTML et __observez le rendu sur un navigateur__.   


## HTML  

Le langage __HTML__ (HyperText Markup Language) permet de se concentrer sur le __contenu__ de notre page web.  
C'est dans le code HTML qu'on précise si l'on veut mettre sur notre page du texte, une vidéo, un son, un lien, etc.  
On peut également créer des zones de texte particulières en désignant une section, un paragraphe, etc.  

Le langage HTML est un langage de __balisages__. On entoure de __balises__ les éléments de notre site.  
Chaque __balise ouvrante__ est associée à une __balise fermante__ (sauf quelques exceptions).  
On définit une balise avec les caractères `<` et `>`.  
Par exemple, la balise `<p>` permet de définir un paragraphe.  


```HTML
<p>Mon chat est très grincheux</p>
```

__Chaque balise à une fonction bien précise.__  

## Glossaire des balises HTML

### Balise sur le texte  

Certaines balises permettent de mettre en `gras` ou en `italique` du texte. D'autres permettent de `surligner` ou de `souligner` du texte.

```HTML
Voici du texte en <b>gras</b> et voici du texte en <i>italique</i>

Il est <mark>important</mark> de <u>souligner</u> ses réponses lorsque l'on répond à une question. 
```


### Les titres

Les __`titres`__. Il est possible de définir plusieurs niveaux de titre à l'aide des balises `<h1>`,`<h2>`,`<h3>`, `<h4>`, ... `<h6>`.  
```HTML
<h1>Mon titre principal</h1>
<h2>Mon sous-titre</h2>
...
```

### Les listes

Les __`listes`__. Il existe 2 types de listes en HTML : les listes ordonnées et les listes non ordonnées.

On utilise la balise `<ol>` pour définir une liste ordonnée (Ordered List) et la balise `<ul>` pour définir une liste non ordonnée (Unordered List). À l'intérieur de nos balises `<ul>` ou `<ol>`, on utilise la balise `<li>` pour écrire un élément de notre liste.

```HTML

<h1> Recette de cuisine </h1>

<h2> Crèpes </h2>


<h3> Ingrédients </h3>

<ul>
    <li>Oeufs</li>
    <li>Beurre</li>
    <li>Huile</li>
    <li>Sucre en poudre</li>
    <li>Farine</li>
    <li>Lait</li>
</ul>


<h3> Préparation </h3>

<ol>
    <li>Faire fondre le beurre</li>
    <li>Mettre la farine dans le saladier</li>
    <li>Déposer les oeufs</li>
    <li>Déposer le sucre</li>
    <li>Déposer le beurre</li>
    <li>Mélanger délicatement en ajoutant le lait</li>
</ol>
```

### Les liens hypertextes  

Les `liens hypertextes`. Il est possible de mettre un lien vers une page web à l'aide de la balise <a> et de l'attribut `href="https://le_lien_d_une_page.fr"`.

```HTML
En 1960 Margaret Hamilton constituait une exception dans le milieu scientifique essentiellement masculin dans lesquels les postes de responsabilité technique étaient rarement attribués aux femmes. Pour plus d'informations vous pouvez cliquer<a href="">ici</a>
```

### Les images  

Les `images`. On peut intégrer une image avec la balise `<img>` et l'attribut `src="nom_de_mon_image.png"`. Il faut veiller à ce que l'image que l'on souhaite intégrer se trouve au même endroit que notre fichier HTML ; sinon, il faut ajouter le chemin vers le dossier qui contient l'image dans l'attribut src. Par exemple : `src="Documents/photo_de_vacances/Le_Port.png"`.

```HTML
<img src="soleil.jpg">
```
  

### Les vidéos  

Les __`vidéos`__. On peut intégrer une vidéo à l'aide des balises `<video>` et `<source>`, puis en ajoutant le lien vers la vidéo avec l'attribut `src` dans la balise `<source>`.

```HTML
<video>
    <source src="spectacle_de_fin_d_annee.mp4" type="video/mp4">
</video>
```

### Les tableaux  

Les __`tableaux`__. On peut créer des tableaux en HTML à l'aide de la balise `<table>`. Il faut ensuite définir des lignes dans notre tableau à l'aide de la balise `<tr>`. Enfin, il faut définir des cellules dans chaque ligne de notre tableau à l'aide de la balise `<td>` (ou `<th>` pour définir un en-tête).

```HTML
<table>
    <tr>
        <th>Record au 100m</th>
        <th>Record au javelot</th>
    </tr>
    <tr>
        <td>17,3</td>
        <td>10,19</td>
    </tr>
    <tr>
        <td>15,2</td>
        <td>12,23</td>
    </tr>
</table>
```

> [!NOTE]
> Toute la documentation concernant le langage HTML est disponible [ici](https://developer.mozilla.org/fr/docs/Web/HTML) 


## CSS  

Le langage __CSS__ (Cascading Style Sheet) permet de se concentrer sur la forme de notre page web.

Ces 2 langages vont très souvent de pair puisqu'une fois que le contenu de notre page est écrit, on souhaite modifier son apparence.    
C'est dans le code CSS que l'on précise, par exemple, la couleur de notre texte, la taille que doit prendre une image ou encore si l'on veut positionner une vidéo en haut à droite de notre page.


### Liens avec le fichier HTML  

Nous avons créé notre page web avec un fichier `html`. Pour définir le style de notre page, il faut créer un fichier `css`.
Une fois le fichier `css` créé, il faut le lier au fichier `html` de notre page afin que notre page suive les règles de style écrites dans notre fichier `css`.    


> [!TIP]   
> Pour cela, il faut que les fichiers html et css se situent au même endroit.    
> Ensuite, on ajoute le nom de notre fichier css dans l'attribut href de la balise `<link>`. La balise `<link>` se situe dans la balise `<head>` de notre fichier.  
> Une fois le lien établi entre les 2 fichiers, on peut écrire des __règles de style__ dans notre fichier __CSS__ qui vont agir sur les éléments de notre fichier __HTML__.  


### Définition d'une règle de style  

En CSS, pour agir sur le style de notre page web, il faut définir des __règles__.

On définit une __règle__ en notant le nom de la balise sur laquelle on souhaite agir. Puis, on ouvre des accolades `{ }`, dans lesquelles on vient écrire les propriétés de notre élément ainsi que la __valeur__ que l'on souhaite lui attribuer.

Ici, le code __CSS__ suivant agit sur tous les éléments contenus dans la balise `<body>`. La propriété `color` agit sur la couleur du texte ; ici, le texte sera rouge. La propriété `background-color` agit sur la couleur de fond. Enfin, `font-size` permet de modifier la taille du texte.

```CSS
body { 
    color : red; 
    background-color : blue;
    font-size : 10px;
}
```  




> [!NOTE]
> Toute la documentation concernant le langage CSS est disponible [ici](https://developer.mozilla.org/fr/docs/Web/CSS) 


