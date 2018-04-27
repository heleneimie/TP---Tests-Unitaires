## Installation

Cloner le projet : https://github.com/heleneimie/TP---Tests-Unitaires.git

Se déplacer dans le projet

Initialiser NodeJS : _npm init_
Installer le framework de test Mocha (environnement dev) : _npm install mocha -D_ ; (de manière globale) : _npm install mocha -D -g_
Installer le module Assert (environnement dev) -> permet de tester l'égalité des champs : _npm install assert -D_

1 - A la racine, créer un dossier test.
2 - Ajouter des fichiers Email.spec.js et ValidatorService.spec.js dans le dossier test.

Documentation de Mocha : https://mochajs.org/#getting-started
Documentation de Assert : https://www.npmjs.com/package/assert

3 - Dans les fichiers Email.spec.js et ValidatorService.spec.js, ajouter vos tests (_ex. documentation ci-dessous_) :

```
const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
}); 
```

## Exécution des tests

Exécuter la commande : _./node_modules/.bin/mocha_ ou _mocha_ si le plugin a été installé de manière globale.

Commande qui permet de lire les fichiers enfants du fichier qu'on va tester : _./node_modules/.bin/mocha --recursive_ 
ou _mocha --recursive_ si le plugin a été installé de manière globale.

Possibilité de simplifier la commande en l'ajoutant directement dans package.json dans :

```
"scripts": {
    "test": "mocha --recursive"
}
```
Maintenant on peut lancer les tests en exécutant la commande : **_npm test_**