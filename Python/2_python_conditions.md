# TP - Découvertes des conditions en Python  

En Python on peut utiliser le mot clé `if` pour signaler qu'une suite d'instrucions va être exécuté si une condition est vraie.  


## Q1  
Testez le code suivant. Que se passe t-il lorsque vous changez la valeur de age ? 
 
```Python 
age = 13
if age <= 15:
    print("college !")
```


Si la première condition d'un programme est fausse il est possible d'utiliser `elif` et/ou `else` dans la suite du programme pour exécuter d'autre instructions.  

On utilise `elif` si on à une autre condition à tester.

## Q2 
Testez le code suivant. Que se passe t-il lorsque vous changez la valeur de age ? 
 
```Python 
age = 13
if age < 15:
    print("collège !")
elif age >= 15:
    print("pas au collège !")
```

On utilise `else` lorsqu'on souhaite exécuter des instructions si aucune conditions précédentes n'a été valide.

## Q3
Testez le code suivant. 
 
```Python 
age = 13
if age < 15:
    print("collège !")
else:
    print("lycée !")
```

On peut évidemment utiliser les `elif` et les `else` ensemble.   


## Q4  
Testez le code suivant.  Que se passe t-il lorsque vous changez la valeur de age ? 
 
```Python 
age = 13
if age < 15:
    print("collège !")
elif 15 <= age <= 18:
    print("lycée !")
else:
    print("c'est fini l'école !")
```

## Q5 
En vous inspirant du code des questions précédentes. 
Écrivez un programme qui demande à un utilisateur son age (voir fonction `input`) et qui affiche `"majeur"` ou `"mineur"` selon l'âge entré.  


## Q6
Écrivez un programme qui demande à un utilisateur de saisir deux nombres. Affiche si le premier nombre est plus grand, plus petit, ou égal au second nombre.

## Q7
Écrivez un programme qui demande à un utilisateur de saisir un nombre entier. Affiche `"Pair"` si le nombre est divisible par 2, sinon affiche `"Impair"`.

## Q8  
Écrivez un programme qui demande à un utilisateur un numéro entre 1 et 7, puis affiche le jour correspondant (1 pour "Lundi", 2 pour "Mardi", etc.). Si le nombre n'est pas compris entre 1 et 7, affiche `"Numéro invalide"`.  

## Q9  
Écrivez un programme qui demande à un utilisateur de saisir une note sur 20. Selon la note, affiche l'appréciation suivante :
- Si la note est supérieure ou égale à 16 : "Très bien"
- Si la note est entre 12 et 15 : "Bien"
- Si la note est entre 8 et 11 : "Passable"
- Si la note est inférieure à 8 : "Insuffisant"


## Q10
Écrivez un programme qui demande à l'utilisateur deux nombres ainsi qu'une opération à effectuer parmi les suivantes : addition, soustraction, multiplication, division, ou puissance.   
Le programme doit alors calculer et afficher le résultat en fonction de l'opération choisie. Si l'utilisateur entre une opération non valide, affiche un message d'erreur.

Conditions :  
- Si l'utilisateur choisit la division, vérifie que le deuxième nombre n'est pas égal à zéro avant d'effectuer la division.
- Permets à l'utilisateur de saisir l'opération sous forme de symbole (+, -, *, /, ^)