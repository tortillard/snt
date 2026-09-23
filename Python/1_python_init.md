# Initiation Python  

## Environnement  
Pour programmer en Python, il faut ouvrir un éditeur de texte dédié. 
En général nous utilisons __Thonny__.

Ouvrez __Thonny__ sur votre ordinateur.  
Quelques chose comme ceci devrait apparaitre.  

![thonny ide](img/thonny_ide.png)

## TP  

> [!TIP] Astuces
> La fonction `print()` permet d'afficher un message dans la partie console. Il suffit de mettre entre les parenthèses ce que l'on souhaite afficher.  
> Les chaînes de caractères(ou phrase) en Python se définissent entre guillemets `"` par exemple voici une phrase. `"Bonjour tout le monde !"`  
> Les nombres n'ont pas besoin de symbole pour être définis. Le nombre `2` sera compris si on l'écrit directement.  

> [!IMPORTANT] Q1  
> Nous allons écrire du code Python qui permet d'afficher une phrase(ou chaine de caractères).  
> Dans la zone script, tapez le code suivant et remplacez prénom par votre prénom : `"Bonjour, je m'appelle prénom"`.  
> Cliquez sur le bouton vert en haut qui permet d'exécutez le code, puis observez.    

> [!IMPORTANT] Q2  
> Le langage Python permet de manipuler les nombres un peu comme une calculatrice. 
> A la manière de la __Q1__, afficher le résultat de chaque opérateur entre `-3` et `2`.  
> Voici les opérateurs : 
> - addition : `+`  
> - soustraction : `-`  
> - multiplication : `*`  
> - division : `/`  
> - puissance : `**`  
    


> [!TIP] 
> On peut stocker les nombres et les chaînes de caractères dans de petites zone mémoire appelées __variables__.  
>  On doit donner un nom à notre variable suivi du symbole `=` pour lui attribuer une valeur. Exemple `a = 4` ou `phrase = "Bonjour tout le monde !"`.   
> Par ailleurs il est possible de séparer des chaînes de caractères et des variables par une `,` dans la fonction `print()`.    
>  Cela a pour effet de '_coller_' le tout et de créer une nouvelle chaînes de caractères.    

> [!IMPORTANT] Q3  
> Copiez puis collez le code suivant. 
> Analysez le, puis observer ce qu'il affiche.  
> ```Python
> a=3
> b="pommes"
> print("Au marché j'ai acheté", a, "joli", b)
> ```

> [!IMPORTANT] Q4  
> Stockez dans une variable `a` le nombre `7` et dans une variable `b` le nombre `-5` et affichez à la manière de la __Q3__ la phrase `la somme de 7 et -5 est 2`   

> [!IMPORTANT] Q5   
Affichez la phrase `je m'appel (prenom) et j'ai (age) ans`. En remplaçant les mots entre parenthèses par des variables.   


> [!TIP]
> La fonction `input()` permet à un programme de demander à l'utilisateur d'entrer des informations pendant l'exécution.
> Le programme s'arrête et attend que l'utilisateur écrive quelque chose, puis appuie sur "Entrée".
> __ATTENTION__ Ce que l'utilisateur tape est renvoyé sous forme de chaîne de caractères. Si on veut pouvoir manipuler un nombre entré par l'utilisateur il faut le convertir, pour ça on utilise la fonction `int()`.

> [!IMPORTANT] Q6  
> Copiez puis collez le code suivant. 
> Analysez le, puis observer ce qu'il affiche.  
> ```Python
> nombre_entree = input("Donnez un nombre au hasard ? ")
> print(nombre_entree)
> ``` 

> [!IMPORTANT] Q7  
> Copiez puis collez le code suivant. 
> Analysez le, puis observer ce qu'il affiche.  
> ```Python
> nombre_entree = input("Donnez un nombre au hasard ? ")
> print(nombre_entree + 4)
> ``` 

> [!IMPORTANT] Q8    
> Copiez puis collez le code suivant. 
> Analysez le, puis observer ce qu'il affiche.  
> ```Python
> nombre_entree = int(input("Donnez un nombre au hasard ? "))
> print(nombre_entree + 4)
> ```

> [!IMPORTANT] Q9      
> Écrivez un programme qui demande à l'utilisateur de donner une valeur pour x.
> Puis qui affiche le résultat de la formule suivante : $(3 \times x) + (5**x)$  

> [!IMPORTANT] Q10      
> Écrivez un programme qui demande à l'utilisateur de donner 3 notes sur 20.
> Puis qui affiche la moyenne de ces 3 notes.    


> [!IMPORTANT] Q11      
> En vous aidant des questions précédentes, écrivez un programme qui demande à l'utilisateur de rentrer la longueur et la largeur d'un rectangle.   
> Puis qui affiche la phrase suivante `"Le périmètre du rectangle est (perimetre)"`  


> [!IMPORTANT] Q12 
> Écrivez un programme qui demande à l'utilisateur de rentrer une température en degré Celsius et qui l'affiche en degré Farenheit.  

 
