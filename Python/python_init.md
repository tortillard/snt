# Initiation Python  

## Environnement  
Pour programmer en Python, nous allons nous rendre sur __Capytale__.  
Vous devez aller sur le site https://www.atrium-sud.fr/ et vous connecter avec vos identifiants.  

__SI VOUS NE PARVENEZ PAS À VOUS CONNECTER : Cliquez sur le site https://console.basthon.fr/ et rendez-vous à la section 'Modalités' directement__ 

Une fois connecté sur Atrium, rendez-vous en haut dans l'onglet _Enseignement_ et cliquez sur _Capytale_. 
En haut de la page se trouve une zone nommée _Accéder à une activité_ copiez et collez le code suivant dans cette zone __7556-3825691__.  



## Modalités  
Le but de ce tp est de vous faire découvrir Python.  

Voilà comment vous allez répondre aux questions : 
    - Vous allez écrire votre code dans la partie __script__. La partie __console__ va vous permettre de tester le code écrit dans la partie __script__.  
    - Pour marquer que le code que vous avez écrit correspond à la question 1 (par exemple) voici ce que vous devez écrire.   
    
    ```Python
    # Question 1
    blabla code
    Python
    qui
    répond à la question 1
    blabla
    ```
    - Une fois que vous avez fini de répondre à une question vous allez ajoutez le symbole `#` devant les lignes de code que vous avez écrites. Cela permet de conserver votre code dans le fichier mais de ne pas être 'compris' par Python. Cela doit donner quelque chose comme ça.  
    ```Python
    # Question 1
    # blabla code
    # Python
    # qui
    # répond à la question 1
    # blabla

    # Question 2
    blabla code
    Python
    qui
    répond à la question 2
    blabla
    ```
    - Des questions ? On lève la main et on demande au professeur !  

## TP  
Informations utiles : 

    - La fonction `print()` permet d'afficher un message dans la partie console. Il suffit de mettre entre les parenthèses ce que l'on souhaite afficher.
    - Les chaînes de caractères(ou phrase) en Python se définissent entre guillemets `"` par exemple voici une phrase. `"Bonjour tout le monde !"`
    - Les nombres n'ont pas besoin de symbole pour être définis. Le nombre `2` sera compris si on l'écrit directement.

### Q1  
Utilisez la fonction `print` pour afficher la phrase suivante avec votre prénom. `"Bonjour, je m'appelle [Ton prénom]"`

### Q2  
Le langage Python permet de manipuler les nombres un peu comme une calculatrice. 
Voici les opérateurs arithmétiques : 
- addition : `+`
- soustraction : `-`
- multiplication : `*`
- division : `/`
- puissance : `**`
Utilisez la fonction `print()` pour afficher le résultat de chaque opérateur entre les nombres `-3` et `2`.  

### Q3  
> [!TIP] 
> On peut stocker les nombres et les chaînes de caractères dans de petites zone mémoire appelées __variables__.
>  On doit donner un nom à notre variable suivi du symbole `=` pour lui attribuer une valeur. Exemple `a = 4` ou `phrase = "Bonjour tout le monde !"`. 
> Par ailleurs il est possible de séparer des chaînes de caractères et des variables par une `,` dans la fonction `print()`.  
>  Cela a pour effet de '_coller_' le tout et de créer une nouvelle chaînes de caractères.  

### Q3  
Que renvoi le code suivant : 
```Python
a=3
b="pommes"
print("Au marché j'ai acheté", a, "joli", b)
```

### Q4  
Stockez dans une variable `a`le nombre `7` et dans une variable `b` le nombre `-5` et affichez à la manière de la __Q3__ la phrase `la somme de 7 et -5 est 2`  

### Q5  
Affichez la phrase `je m'appel (prenom) et j'ai (age) ans`. En remplaçant les mots entre parenthèses par des variables.  


> [!TIP]
> La fonction `input()` permet à un programme de demander à l'utilisateur d'entrer des informations pendant l'exécution.
> Le programme s'arrête et attend que l'utilisateur écrive quelque chose, puis appuie sur "Entrée".
> __ATTENTION__ Ce que l'utilisateur tape est renvoyé sous forme de chaîne de caractères. Si on veut pouvoir manipuler un nombre entré par l'utilisateur il faut le convertir, pour ça on utilise la fonction `int()`.

### Q6  
Que renvoie le code suivant : 
```Python
nombre_entree = input("Donnez un nombre au hasard ? ")
print(nombre_entree)
``` 

### Q7  
Que renvoie le code suivant : 
```Python
nombre_entree = input("Donnez un nombre au hasard ? ")
print(nombre_entree + 4)
``` 

### Q8    
Que renvoie le code suivant : 
```Python
nombre_entree = int(input("Donnez un nombre au hasard ? "))
print(nombre_entree + 4)
```

### Q9      
Écrivez un programme qui demande à l'utilisateur de rentrer la longueur et la largeur d'un rectangle. Et affiche la phrase suivante `"Le périmètre du rectangle est (perimetre)"`


### Q10 
Écrivez un programme qui demande à l'utilisateur de rentrer une température en degré Celsius et l'affiche en degré Farenheit.  
 
