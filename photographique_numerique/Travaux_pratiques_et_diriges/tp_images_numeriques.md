# Images numériques  

## La définition d'une image


Dans cette séance, nous allons explorer les images numériques.  
Nous définirons ce qu'est un pixel et comment les pixels d'une image en couleur sont représentés.  
Nous aborderons également les concepts de __définition__ et de __profondeur de couleur__ d'une image numérique, ainsi que ceux de __résolution__ et de __taille__ d'image.  


> [!TIP] Dimensions d'une image 
> On appelle définition d'une image le nombre de pixels qu'elle contient. 
> Par exemple, une image contenant 1920 pixels en largeur et 1080 pixels en hauteur possède une définition de 2 073 600 pixels ou 2,07 Mégapixels (1920 × 1080 = 2 073 600).

Cliquez sur le lien et répondez aux questions suivantes : https://unsplash.com/fr/photos/une-vue-aerienne-de-la-plage-et-des-rochers-dans-locean-Jfv_zYfLC04

> [!IMPORTANT] Q1
> Cliquez sur sur la flèche à coté de `télécharger gratuitement`. 
> Il est possible de télécharger l'image en 4 définitions différentes. Lesquelles ? (en nombre de pixels)

> [!IMPORTANT] Q2
> Certaines informations sont disponibles en desous de l'image.
> Donnez le nom de la _'license'_ à laquelle est soumise cette image.   

> [!IMPORTANT] Q3
> Citez une autorisation et une interdiction avec cette _'license'_  


## Les pixels  

Une image numérique peut être représentée par un tableau à deux dimensions (matrice) constitué de cases. Chaque case est appelée pixel (Picture element).  

La couleur d'un pixel est définie par __trois composantes__ : le rouge (R), le vert (V) et le bleu (B).  

En ajustant l'intensité de chacune de ces trois couleurs, il est possible de créer toutes les teintes, selon le principe physique de la synthèse additive des couleurs.  

<img src="img_images_numeriques_md/additive.jpg" alt="additive" width="300"/>  


Pour stocker une image, il suffit de conserver les informations de chacun de ses pixels. Étant donné qu'un pixel est défini par ses trois composantes R, V et B, il suffit d'enregistrer ces trois valeurs pour chaque pixel.  

> [!TIP] Profondeur de couleur d'une image 
> La profondeur de couleur d'une image correspond au nombre de bits utilisés pour coder la couleur de chaque pixel.  
> Les images en couleur standards ont généralement une profondeur de 24 bits (soit 3 $\times$ 8 bits).    
> Chaque octet(groupe de 8 bits) correspond à une composante (Rouge, verte ou bleu) avec des valeurs entières comprises entre 0 et 255.   
> Par conséquent, la couleur d'un pixel est exprimée sous la forme d'un triplet (R, V, B), comme par exemple `(51, 255, 141)` , où `R = 51, V = 255 et B = 141`.  

Le site https://htmlcolorcodes.com/fr/ permet de visualiser toutes les couleurs que l'on peut coder avec une profondeur de 24 bits.  
![code color](img_images_numeriques_md/color_code.png)  

> [!IMPORTANT] Q4  
> Aller sur le site https://htmlcolorcodes.com/fr/.  
> Comme sur la photo précédente, cliquer afin de mettre le mode RGB(ou RVB).   
> Vous pouvez maintenant voir que les nombres `245`, `73` et `39` sont modifiables, pour cela il suffit de double-cliquez sur ces nombres et changer de valeur, puis entrée.     
> Modifiez ces valeurs par `51, 255, 141` dites si cette couleur est plus proche de la couleur d'une fraise, d'un bonbon à la menthe ou d'un poussin.   


> [!TIP] 
> Nous allons déterminer les codes `RVB` de couleurs différentes.  
> Sur le site précédent, on voit que pour une couleur donnée il existe pleins de nuance différentes.
> Par exemple, pour la couleur rouge on voit des teintes plus clair et d'autres plus foncées, et chaque teinte à un code `RVB` différent.  
> Dans la question suivante on demande le code `RVB` de couleurs dites __pure__.  
> Une couleur est __pure__ si chaque composante `R`,`V` ou `B` est égal à `0` ou `255`.    
> Par exemple, le code `RVB` du rouge __pure__ est `(255, 0, 0)`.   

> [!IMPORTANT] Q5 
> Quel code `RVB` permet d'obtenir les couleurs __pure__ suivantes. 
> (Si cela vous aide vous pouvez utiliser les ressources précédentes pour vous aider à répondre.)  
> - Bleu 
> - Blanc 
> - Jaune 
> - Noir  
> - Cyan 


> [!IMPORTANT] Q6  
> Reprenez le site https://htmlcolorcodes.com/fr/.  
> Que se passe-t-il lorsque chaque composante `RVB` possède la même valeur ?  
> Essayez de mettre toutes les valeurs à 123.  
> Puis essayez de mettre toutes les à 200.  


> [!IMPORTANT] Q7
> Nous allons calculer la taille de l'image de la question 1 en octet. 
> Pour calculer la taille d'une image(ou d'un fichier) il faut compter son nombre de bits(ou d'octets)
> On rappel que __1 octet = 8 bits__, __2 octets = 16 bits__, etc...
> L'image originale de la __Q1__ possède 4000 pixels de largeur et 2250 pixels de hauteur. 
> Sachant que la profondeur de couleur de cette image est de 24 bits.(reprenez la section verte `Profondeur de couleur d'une image` si nécessaire)   
> Calculez la taille de cette image en bits ? Puis en octets ? 


> [!IMPORTANT] Q8
> En utilisant une profondeur de couleur de 24 bits. 
> Combien de couleurs distinctes peut-on obtenir avec le système RVB ? __Expliquez votre réponse__.


## Résolution d'une image  


> [!TIP] Dimensions d'une image   
> Les dimensions d'une image sont sa largeur et sa hauteur exprimées en pouces, une unité de mesure anglo-saxonne.
> Un pouce équivaut à 2,54 cm, et son symbole est « " ».  

> [!TIP] Résolution d'une image  
> La __résolution__ d'une image pour l'affichage à l'écran correspond au nombre de pixels par pouce(ppp)ou en anglais pixels per inch(ppi).  
> La résolution représente donc le nombre de pixels contenus sur un pouce de longueur.  
> La résolution peut être déterminée grâce à l'une des deux formules suivantes.  
> $resolution = \frac{\texttt{nb pixels largeur}}{\texttt{largeur en pouce}}$ = $\frac{\texttt{nb pixels hauteur}}{\texttt{hauteur en pouce}}$  


> [!NOTE]
> Exemple de calcul : 
> 
> Hauteur de l'écran : 15,33 cm   
> Largeur de l'écran : 6,77 cm  
> Définition de l'écran : 2 770 x 1 224 pixels  
> 
> __Donnez en pixels par pouce la résolution de l'écran ?__   
> La largeur de l'écran est de 6,77 cm.   
> On convertit cette mesure en pouce cela nous donne $\frac{6,77}{2,54} = 2,66"$.   
> L'écran possède 1 224 pixels en largeur sur une longueur de 2,66".   
> On calcule donc la résolution de la manière suivante $\frac{1224}{2,66} = 460,15 ppp$  
> 
> On trouve un résultat presque équivalent si on effectue les mêmes calculs avec la hauteur plutôt que la largeur.   
> $\frac{15,33}{2,54} = 6,04"$  
> $\frac{2770}{6,04} = 458,95 ppp$  
> 
> On peut dire que __$460,15 = 458,95$__    


> [!IMPORTANT] Q9
> La figure 1 ci dessous représente une image où chaque carré représente un pixel. 
> Donnez la taille (en pouces), la définition (en pixels) et la résolution (en ppp).  

![figure 1](img_images_numeriques_md/snt_nathan_p_93_FIGURE_1.png)  

