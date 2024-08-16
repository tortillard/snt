# La photographie numérique  

## Histoire    

- En 1826 le français Nicéphore Niépce(lycée de Chalon-sur-Saône, rue à Nice, ...) invente le principe de photographie argentique.  
![Première photographie](img/point_de_vue_du_gras.png)    
- En 1957 Russel Kirsh fait parti des premier à numériser une photo, notamment celle de son fils.   
![Première photo numérisée](img/walden.png)  
- L'apparition des appareils photo numériques voit le jour en 1975. Ce sont les premiers appareils capable d'enregistrer une image sous forme de __bits__ qui peut être stocké en mémoire.     
- Les premiers téléphone capable de prendre des photos voient le jour dans les années 2000 ce qui démocratise la photo numérique.   
- 2007 : arrivée du smartphone capable de prendre des photos avec une qualité plus que satisfaisante.  



## Comment enregistrer un moment de vie ?  

Tout les appareils photographique fonctionnent avec le même principe découvert au 5ème siècle avant Jésus-Christ : la __chambre noire (_camera obscura_)__.  

![Store norske leksikon](img/camera_obscura.png)  

Un trou se trouve sur un des cotés de la boite et une plaque d'étain recouvert de goudron de l'autre coté. 
Les rayons lumineux entrent dans la boite par le trou et viennent se réfléchir sur la plaque.  
Les joies de la physique font alors apparaitre une image qui à la particularité d'être inversé. 


Voici le fonctionnement similaire pour nos yeux ou un appareil photographique. 

![Oeil et camera](img/oeil_et_camera.png)


Au XXème siècle on utilise l'appareil photo argentique. Une pellicule argentique est composée de sels d'argent qui réagissent chimiquement lorsqu'ils sont exposés à la lumière, ce qui après un certain temps révèle l'image.  

Aujourd'hui nos appareils ne sont pas argentique mais _numérique_. Ils ne possèdent dont pas de pellicule qui réagit à la lumière...


__Question : Comment un appareil numérique peut afficher une image sur un écran ?__


## Capteur numérique  

Les capteurs numérique se trouvent dans tout les objets permettant de prendre des photos numérique(téléphone, tablette, webcam, satellite,...).  
Leur tailles sont diverses en fonction de l'objet par exemple les capteurs numérique sur les smartphones sont plus petit que ceux dans les appareils photographique haut de gamme. 

Un capteur numérique est constitué d'une grille de __photosite__.  
Du grec phōs = la lumière et sitos = grain, cellule.  
Les photosites sont des cellules permettant de capter la lumière.  

Les capteurs numériques sont composés de photosites.  
Chaque photosite est recouvert d'un filtre coloré en rouge, vert ou bleu et ne laisse passer que les rayons de leur couleur. C'est grâce à cela qu'on peut voir nos images en couleur.   

![Matrice de Bayer](img/matrice_de_bayer.png)  

Les photosites sont placés selon la disposition de _Bayer_. 
La particularité de ce placement réside dans le nombre de filtre vert qui sont 2 fois plus présent que les filtres d'autres couleur. Le choix de cette disposition n'as pas était faite aléatoirement car l'oeil humain est plus receptif à la couleur verte. 


__Question : Si les photosites des capteurs ne laissent passer que la couleur rouge, verte ou bleu comment est-il possible de voir des images de couleur jaune, marron, orange, ... ?__


La __définition__ d'un capteur est le nombre de __photosites__ qu'il possède. 



## L'image numérique   

__Définition__ : Une image numérique peut être représentée par un tableau à deux dimensions(matrice) constituée de cases. Chaque case est appelées __pixels__(Picture element).  

Chaque __pixel__ possède une position que l'on nomme coordonnées.   
Les coordonnées d'un __pixel__ sont représentés par un couple _(i, j)_ où _i_ (respect. _j_) possède une valeur comprises entre 0 et la hauteur (respect. largeur).  

En __informatique__ pour repérer les coordonnées d'un pixel on place l'origine du repère se trouve en haut à gauche de l'écran. 
Voici les coordonnées des pixels d'une image sur un écran. 

![](img/coordonnees_pixel.png)  


On appelle __définition__ d'une image le nombre de pixels qu'elle contient.  
Par exemple une image contenant 1920 pixels en largeur et 1080 pixels de hauteur possède une définition de 2 073 600 pixels ou 2.07 Mégapixels. (1920 $\times$ 1080 = 2 073 600).   

On appelle __résolution__ d'une image le nombre de pixels qu'elle contient __sur une longueur donnée__, elle est noté en Pixels Par Pouce (ou Pixels Per Inch). Par exemple un écran avec une définition de 1920 $\times$ 1080 affiche une image en plein écran avec une résolution de 92 ppi. 

Chaque pixel contient une information primordiale : __sa couleur__. En général on représente la couleur d'un pixel par 3 valeurs celle du rouge, du vert et du bleu et chaque valeur est comprise entre 0 et 255.  

__Question : Combien de couleur différentes un pixel peut prendre ?__


## Des photosites au pixel  

Un __photosite__ envoie une impulsion électrique lorsqu'il réagit à la lumière. L'intensité électrique émise est proportionelle à la quantité de lumière reçue. 
Cette impulsion est codé sur 8 bits (1 octet).    

Attention ! Un photosite n'est pas un pixel. Un photosite capture la couleur associée à son filtre, soit rouge, verte ou bleu.    
Alors qu'un pixel possède une couleur résultante de 3 valeurs numérique comprises entre 0 et 255.    

Le lien entre les photosites est un pixel est le suivant.    
La couleur d'un pixel est donnée à partir de 4 photosites(1 rouge, 2 vert et 1 bleu) comme sur l'image ci-dessous.  

![4 photosites 1 pixel](img/4_photosites.png)  