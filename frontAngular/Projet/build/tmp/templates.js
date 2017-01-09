(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/common/footer.tpl.html",
    "<div class=\"pure-g\">\n" +
    "  <div class=\"pure-u-1 text-center\">\n" +
    "    <p>&copy; 2017 - <a href=\"http://dentist-data.fr\">Dentist-Data</a>\n" +
    "  </div>\n" +
    "  <!-- <div class=\"pure-u-1 text-center\">\n" +
    "    <ul class=\"hlist\">\n" +
    "      <li><a target=\"_blank\" href=\"http://twitter.com/vesparny\">twitter</a>\n" +
    "      </li>\n" +
    "      <li><a target=\"_blank\" href=\"https://plus.google.com/+AlessandroArnodo\">g+</a>\n" +
    "      </li>\n" +
    "      <li><a target=\"_blank\" href=\"http://www.linkedin.com/in/alessandroarnodo\">LinkedIn</a>\n" +
    "      </li>\n" +
    "      <li><a target=\"_blank\" href=\"https://github.com/vesparny/angular-kickstart\">GitHub</a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div> -->\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/common/header.tpl.html",
    "<nav>\n" +
    "    <div class=\"nav-wrapper light-blue lighten-1\">\n" +
    "      <a href=\"#!\" class=\"brand-logo\">Dentist-Data</a>\n" +
    "      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n" +
    "      <ul class=\"right hide-on-med-and-down\">\n" +
    "        <li><a href ui-sref=\"root.home\">{{ 'home' | uppercase }}</a></li>\n" +
    "        <li><a href ui-sref=\"root.propos\">{{ 'à propos' | uppercase }}</a></li>\n" +
    "        <li><a href ui-sref=\"root.nous\">{{ 'qui somme nous ?' | uppercase }}</a></li>\n" +
    "        <li><a href ui-sref=\"root.pourquoi\">{{ 'pourquoi ce site ?' | uppercase }}</a></li>\n" +
    "        <li><a class=\"waves-effect waves-light btn light-blue darken-3\">Connexion</a></li>\n" +
    "      </ul>\n" +
    "      <ul class=\"side-nav\" id=\"mobile-demo\">\n" +
    "        <li><a href ui-sref=\"root.home\">{{ 'home' | uppercase }}</a></li>\n" +
    "        <li><a href ui-sref=\"root.propos\">{{ 'à propos' | uppercase }}</a></li>\n" +
    "        <li><a href ui-sref=\"root.nous\">{{ 'qui sommes nous ?' | uppercase }}</a></li>\n" +
    "        <li><a href ui-sref=\"root.pourquoi\">{{ 'pourquoi ce site ?' | uppercase }}</a></li>\n" +
    "        <li><a class=\"waves-effect waves-light btn light-blue darken-3\">Connexion</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/home/home.tpl.html",
    "<div class=\"pure-g\">\n" +
    "  <div class=\"island3 pure-u-1 pure-u-lg-2-3\">\n" +
    "    <h3>Fiche clinique DTM</h3>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div>\n" +
    "  <h4>Information patient</h4>\n" +
    "  <div class=\"row\">\n" +
    "    <form class=\"col s12\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"input-field col s5\">\n" +
    "          <label for=\"\">Identifiant du patient</label>\n" +
    "          <input type=\"text\">\n" +
    "        </div>\n" +
    "        <div class=\"input-field col s2\">\n" +
    "          <select>\n" +
    "            <option value=\"\" disabled selected>Sexe</option>\n" +
    "            <option value=\"1\">Homme</option>\n" +
    "            <option value=\"2\">Femme</option>\n" +
    "          </select>\n" +
    "          <label>Sexe</label>\n" +
    "        </div>\n" +
    "        <div class=\"input-field col s5\">\n" +
    "          <label for=\"\">Profession</label>\n" +
    "          <input type=\"text\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"input-field col s6\">\n" +
    "      <label for=\"\">Date de naissance</label>\n" +
    "      <input type=\"date\" class=\"datepicker\">\n" +
    "    </div>\n" +
    "      <div class=\"input-field col s6\">\n" +
    "      <label for=\"\">Date de la consultation</label>\n" +
    "      <input type=\"date\" class=\"datepicker\">\n" +
    "      <!--Mettre la date d'aujourd'hui comme base-->\n" +
    "      </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"input-field col s12\">\n" +
    "          <textarea id=\"textarea1\" class=\"materialize-textarea\"></textarea>\n" +
    "          <label for=\"textarea1\">Bilan de santé</label>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "      <div>\n" +
    "        <h4>1. Motif de la consultation</h4>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"input-field col s12\">\n" +
    "            <textarea id=\"douleur\" class=\"materialize-textarea\"></textarea>\n" +
    "            <label for=\"douleur\">Douleurs</label>\n" +
    "          </div>\n" +
    "          </div>\n" +
    "        <p>\n" +
    "          <input type=\"checkbox\" class=\"filled-in\" id=\"no-douleur\" />\n" +
    "          <label for=\"no-douleur\">Pas de douleur</label>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          <input type=\"checkbox\" class=\"filled-in\" id=\"machoire\" />\n" +
    "          <label for=\"machoire\">Douleur dans la mâchoire, tempe, oreille ou en avant de l’oreille</label>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          <input type=\"checkbox\" class=\"filled-in\" id=\"spontanee\" />\n" +
    "          <label for=\"spontanee\">Douleur spontanée</label>\n" +
    "        </p>\n" +
    "        <p>\n" +
    "          <input type=\"checkbox\" class=\"filled-in\" id=\"orale\" />\n" +
    "          <label for=\"orale\">Douleur provoquée par une fonction/parafonction orale</label>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "      <div>\n" +
    "        <h4>2. Evaluation de la douleur</h4>\n" +
    "\n" +
    "        <!--CANVAS-->\n" +
    "\n" +
    "        <label for=\"\">Douleur 1</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <label for=\"\">EVA</label>\n" +
    "        <!--Selecteur tactile-->\n" +
    "\n" +
    "        <label for=\"\">Date de début</label>\n" +
    "        <input type=\"date\">\n" +
    "\n" +
    "        <label for=\"\">Qualité</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <label for=\"\">Durée</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <label for=\"\">Fréquence</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <label for=\"\">Circonstances du début</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <label for=\"\">Modifié par</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <label for=\"\">Traitement</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <button>Questionnaire DN4</button>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <button>Ajouter une douleur</button>\n" +
    "        <button>Supprimer une douleur</button>\n" +
    "      </div>\n" +
    "\n" +
    "      <div>\n" +
    "        <h4>3. Environnement</h4>\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Négatif</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Non renseigné</label>\n" +
    "\n" +
    "        <label for=\"\">Familial</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <label for=\"\">Social</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <label for=\"\">Professionnel</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <label for=\"\">Score EDAS 21</label>\n" +
    "        <button>Questionnaire EDAS 21</button>\n" +
    "\n" +
    "        <label for=\"\">Anxiété</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <label for=\"\">Dépression</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <label for=\"\">Stress</label>\n" +
    "        <input type=\"text\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div>\n" +
    "        <h4>4. Troubles de la posture</h4>\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Négatif</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Non renseigné</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Rachidienne</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Céphalique</label>\n" +
    "        <input type=\"text\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div>\n" +
    "        <h4>5. Troubles du sommeil</h4>\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Négatif</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Non renseigné</label>\n" +
    "\n" +
    "        <p>Souffrez-vous du syndrome d'apnées/hypopnées obstructives du sommeil ? </p>\n" +
    "        <input type=\"radio\" value=\"0\">\n" +
    "        <label for=\"\">Oui</label>\n" +
    "        <input type=\"radio\" value=\"1\">\n" +
    "        <label for=\"\">Non</label>\n" +
    "\n" +
    "        <label for=\"\">Autres symptômes</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <label for=\"\">Traitement</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <button>Questionnaire PSQI</button>\n" +
    "        <label for=\"\">Score PSQI</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <button>Questionnaire ISI</button>\n" +
    "        <label for=\"\">Score ISI</label>\n" +
    "        <input type=\"text\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div>\n" +
    "        <h4>6. Troubles oculaires</h4>\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Négatif</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Non renseigné</label>\n" +
    "\n" +
    "        <input type=\"text\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div>\n" +
    "        <h4>7. Habitudes nocives</h4>\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Négatif</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Non renseigné</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Onycophagie</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Mordillement des lèvres/style/objets</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Bruxisme d'éveil</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Chewing-gum</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Tabac</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Autres</label>\n" +
    "\n" +
    "        <input type=\"text\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div>\n" +
    "        <h4>8. Dysfonctionnements oro-ligaux</h4>\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Négatif</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Non renseigné</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Dysfonctionnements orolinguaux</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Déglutition atypique</label>\n" +
    "\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <button>Score de Friedman</button>\n" +
    "        <label for=\"\">Score de Friedman</label>\n" +
    "        <input type=\"text\">\n" +
    "\n" +
    "        <button>Score de Mallampati</button>\n" +
    "        <label for=\"\">Score de Mallampati</label>\n" +
    "        <input type=\"text\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div>\n" +
    "        <h4>9. Traumatisme</h4>\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Négatif</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Non renseigné</label>\n" +
    "\n" +
    "        <input type=\"text\">\n" +
    "      </div>\n" +
    "\n" +
    "      <div>\n" +
    "        <h4>10. Observations complémentaires</h4>\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Négatif</label>\n" +
    "\n" +
    "        <input type=\"checkbox\">\n" +
    "        <label for=\"\">Non renseigné</label>\n" +
    "      </div>\n" +
    "\n" +
    "      <div id=\"div12\">\n" +
    "        <div id=\"titre12\">\n" +
    "          <h2>12. Rapports Incisifs :\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Négatif\n" +
    "            </label>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Non Renseigné\n" +
    "            </label>\n" +
    "          </h2>\n" +
    "        </div>\n" +
    "        <div id=\"champs12\">\n" +
    "          <p>Dent de référence : </p>\n" +
    "          <div>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              11\n" +
    "            </label>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              21\n" +
    "            </label>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Autre <input type=\"text\"/>\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              31\n" +
    "            </label>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              41\n" +
    "            </label>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Autre <input type=\"text\"/>\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div>\n" +
    "            <p>Surplomb horizontal : </p>\n" +
    "            <label>\n" +
    "              <input type=\"number\"/>\n" +
    "              mm\n" +
    "            </label>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Si négatif\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div>\n" +
    "            <p>Recouvrement vertical : </p>\n" +
    "            <label>\n" +
    "              <input type=\"number\"/>\n" +
    "              mm\n" +
    "            </label>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Si négatif\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div>\n" +
    "            <p>Existe-t-il un décalage des milieux inter-incisifs ?</p>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Oui\n" +
    "              <label>\n" +
    "                <input type=\"number\"/>\n" +
    "                mm\n" +
    "              </label>\n" +
    "            </label>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Non\n" +
    "            </label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div id=\"div13\">\n" +
    "        <div id=\"titre13\">\n" +
    "          <h2>13. Mouvements d'ouverture, latéralités et propulsion :\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Négatif\n" +
    "            </label>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Non Renseigné\n" +
    "            </label>\n" +
    "          </h2>\n" +
    "        </div>\n" +
    "        <div id=\"champs13\">\n" +
    "          <table>\n" +
    "            <thead>\n" +
    "              <tr>\n" +
    "                <th> </th>\n" +
    "                <th colspan=\"3\">Côté droit</th>\n" +
    "                <th colspan=\"3\">Côté gauche</th>\n" +
    "              </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "              <tr>\n" +
    "                <td>Ouverture non douloureuse :\n" +
    "                  <label>\n" +
    "                    <input type=\"number\"/>\n" +
    "                    mm\n" +
    "                  </label>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  Douleur provoquée\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  Est-elle identique à la douleur habituelle ?\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  Douleur(s) référée(s)\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  Douleur provoquée\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  Est-elle identique à la douleur habituelle ?\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  Douleur(s) référée(s)\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>Ouv. max. non assistée :\n" +
    "                  <label>\n" +
    "                    <input type=\"number\"/>\n" +
    "                    mm\n" +
    "                  </label>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>Ouv. max. assistée :\n" +
    "                  <label>\n" +
    "                    <input type=\"number\"/>\n" +
    "                    mm\n" +
    "                  </label>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>\n" +
    "                  Ouv. contre résistance :\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>\n" +
    "                  Fermeture contre résistance :\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>Latéralité droite :\n" +
    "                  <label>\n" +
    "                    <input type=\"number\"/>\n" +
    "                    mm\n" +
    "                  </label>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>Latéralité droite assistée :\n" +
    "                  <label>\n" +
    "                    <input type=\"number\"/>\n" +
    "                    mm\n" +
    "                  </label>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>\n" +
    "                  Latéralité droite contre résistance :\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>Latéralité gauche :\n" +
    "                  <label>\n" +
    "                    <input type=\"number\"/>\n" +
    "                    mm\n" +
    "                  </label>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>Latéralité gauche assistée :\n" +
    "                  <label>\n" +
    "                    <input type=\"number\"/>\n" +
    "                    mm\n" +
    "                  </label>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>\n" +
    "                  Latéralité gauche contre résistance :\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>Propulsion :\n" +
    "                  <label>\n" +
    "                    <input type=\"number\"/>\n" +
    "                    mm\n" +
    "                  </label>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>\n" +
    "                  Propulsion contre résistance :\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "          <div>\n" +
    "            <p>Est-ce que l'un des mouvements effectués vous a déclenché des maux de tête ? </p>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\">\n" +
    "              Oui\n" +
    "            </label>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\">\n" +
    "              Non\n" +
    "            </label>\n" +
    "          </div>\n" +
    "          <div>\n" +
    "            <label>\n" +
    "              Si Oui lesquels ?\n" +
    "              <input type=\"text\">\n" +
    "            </label>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div id=\"div14\">\n" +
    "        <div id=\"titre14\">\n" +
    "          <h2>14. Trajet d'ouverture / fermeture :\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Négatif\n" +
    "            </label>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Non Renseigné\n" +
    "            </label>\n" +
    "          </h2>\n" +
    "        </div>\n" +
    "        <div id=\"champs14\">\n" +
    "          <p>Forme du trajet d'ouverture : </p>\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\"/>\n" +
    "            Rectiligne\n" +
    "          </label>\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\"/>\n" +
    "            Réflexion corrigée à droite\n" +
    "          </label>\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\"/>\n" +
    "            Réflexion corrigée à gauche\n" +
    "          </label>\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\"/>\n" +
    "            Déviation non corrigée à droite\n" +
    "          </label>\n" +
    "          <label>\n" +
    "            <input type=\"checkbox\"/>\n" +
    "            Déviation non corrigée à gauche\n" +
    "          </label>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          Canvas à foutre ici\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div id=\"div15\">\n" +
    "        <div id=\"titre15\">\n" +
    "          <h2>15. Bruits articulaires lors des mouvements fonctionnels :\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Négatif\n" +
    "            </label>\n" +
    "            <label>\n" +
    "              <input type=\"checkbox\"/>\n" +
    "              Non Renseigné\n" +
    "            </label>\n" +
    "          </h2>\n" +
    "        </div>\n" +
    "        <div id=\"champs15\">\n" +
    "          <table>\n" +
    "            <thead>\n" +
    "              <tr>\n" +
    "                <th colspan=\"2\"> </th>\n" +
    "                <th colspan=\"2\">Praticien</th>\n" +
    "                <th colspan=\"2\">Patient</th>\n" +
    "                <th colspan=\"2\"> </th>\n" +
    "              </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "              <tr>\n" +
    "                <td> </td>\n" +
    "                <td> </td>\n" +
    "                <td>Claquement</td>\n" +
    "                <td>Crépitement</td>\n" +
    "                <td>Claquement</td>\n" +
    "                <td>Crépitement</td>\n" +
    "                <td>Douleur</td>\n" +
    "                <td>Douleur habituelle ?</td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td rowspan=\"2\">Ouverture </td>\n" +
    "                <td>\n" +
    "                  ATM droite\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>\n" +
    "                  ATM gauche\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td rowspan=\"2\">Fermeture </td>\n" +
    "                <td>\n" +
    "                  ATM droite\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>\n" +
    "                  ATM gauche\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td rowspan=\"2\">Latéralité gauche </td>\n" +
    "                <td>\n" +
    "                  ATM droite\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>\n" +
    "                  ATM gauche\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td rowspan=\"2\">Latéralité droite </td>\n" +
    "                <td>\n" +
    "                  ATM droite\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>\n" +
    "                  ATM gauche\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td rowspan=\"2\">Propulsion </td>\n" +
    "                <td>\n" +
    "                  ATM droite\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "\n" +
    "              <tr>\n" +
    "                <td>\n" +
    "                  ATM gauche\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <input type=\"checkbox\"/>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                  <select>\n" +
    "                    <option></option>\n" +
    "                    <option>M. temporal droit</option>\n" +
    "                    <option>M. temporal gauche</option>\n" +
    "                    <option>M. masséter droit</option>\n" +
    "                    <option>M. masséter gauche</option>\n" +
    "                    <option>Atm droit</option>\n" +
    "                    <option>Atm gauche</option>\n" +
    "                    <option>Autres <input type=\"text\"></option>\n" +
    "                  </select>\n" +
    "                </td>\n" +
    "              </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div id=\"div16\">\n" +
    "        <div id=\"titre16\">\n" +
    "\n" +
    "        </div>\n" +
    "        <div id=\"champs16\">\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "<!-- ..... -->\n" +
    "\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/nous/nous.tpl.html",
    "\n" +
    "<div class=\"row\">\n" +
    "   <div class=\"input-field col s6\">\n" +
    "     <input placeholder=\"\" id=\"first_name\" type=\"text\" class=\"validate\">\n" +
    "     <label class=\"active\" for=\"first_name\">First Name</label>\n" +
    "   </div>\n" +
    " </div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/pourquoi/pourquoi.tpl.html",
    "<div class=\"pure-g island3\">\n" +
    "  <div class=\"content pure-u-1\">\n" +
    "    <p class=\"island-panel\">\n" +
    "      <strong>Note that this is only a getting started guide, for more detailed information about the build system, the available tasks, the configuration of the build or anything else, please refer to the <a href=\"https://github.com/vesparny/angular-kickstart/#readme\" target=\"_blank\">documentation</a> on the GitHub project.</strong>\n" +
    "    </p>\n" +
    "\n" +
    "    <h3>What and Why</h3>\n" +
    "    <p>\n" +
    "      <code>angular-kickstart</code> is an opinionated kickstart for single page application development with AngularJS. It makes your development and testing easy, keeps the structure of the project consistent and allows you to create a fully optimized\n" +
    "      production release withe ease. After having developed a lot of AngularJS projects I decided to collect here what I've learnt.\n" +
    "    </p>\n" +
    "\n" +
    "    <h3>Getting started</h3>\n" +
    "    <p>\n" +
    "      Install\n" +
    "      <strong><a href=\"https://github.com/joyent/node/wiki/installation\" target=\"_blank\">node.js</a></strong>. Then\n" +
    "      <strong>sass, gulp and bower</strong> if you haven't yet.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ gem install sass\n" +
    "    $ npm -g install gulp bower\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      After that, install\n" +
    "      <code>angular-kickstart</code> - download the <a href=\"https://github.com/vesparny/angular-kickstart/releases/latest\">latest</a> release (or clone the master branch if want to run the development version). Unzip the project and cd into it, then\n" +
    "      install bower and npm dependencies, and run the application in development mode.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ npm install\n" +
    "    $ bower install\n" +
    "    $ gulp serve\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      You are now ready to go, your applcation is available at <code>http://127.0.0.1:3000</code>.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      You are now ready to start coding, every file you add, edit or delete into the\n" +
    "      <code>/client</code> folder, will be handled by the build system and the browser will reload.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      When you are ready to build a production release there is a task for that.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ gulp serve:dist\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      This task will lint your code, optimize css js and images files, run unit tests. After the task has successfully finished, you can find an optimized version of your project in the\n" +
    "      <code>/build/dist</code> folder.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      Other tasks are available:\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    #for developing running unit test on every file change.\n" +
    "    $ gulp serve:tdd\n" +
    "\n" +
    "    #for running e2e test. (you application should be running on http://127.0.0.1:3000)\n" +
    "    $ gulp test:e2e\n" +
    "\n" +
    "    #for running unit tests one time then exit.\n" +
    "    $ gulp test:unit\n" +
    "    </code>\n" +
    "</pre>\n" +
    "    <p class=\"text-center\">\n" +
    "      <a href=\"https://github.com/vesparny/angular-kickstart/#readme\" target=\"_blank\" class=\"pure-button button-xlarge pure-button-primary\">\n" +
    "        Full documentation on GitHub\n" +
    "      </a>\n" +
    "    </p>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/propos/propos.tpl.html",
    "<div class=\"pure-g island3\">\n" +
    "  <div class=\"content pure-u-1\">\n" +
    "    <p class=\"island-panel\">\n" +
    "      <strong>Note that this is only a getting started guide, for more detailed information about the build system, the available tasks, the configuration of the build or anything else, please refer to the <a href=\"https://github.com/vesparny/angular-kickstart/#readme\" target=\"_blank\">documentation</a> on the GitHub project.</strong>\n" +
    "    </p>\n" +
    "\n" +
    "    <h3>What and Why</h3>\n" +
    "    <p>\n" +
    "      <code>angular-kickstart</code> is an opinionated kickstart for single page application development with AngularJS. It makes your development and testing easy, keeps the structure of the project consistent and allows you to create a fully optimized\n" +
    "      production release withe ease. After having developed a lot of AngularJS projects I decided to collect here what I've learnt.\n" +
    "    </p>\n" +
    "\n" +
    "    <h3>Getting started</h3>\n" +
    "    <p>\n" +
    "      Install\n" +
    "      <strong><a href=\"https://github.com/joyent/node/wiki/installation\" target=\"_blank\">node.js</a></strong>. Then\n" +
    "      <strong>sass, gulp and bower</strong> if you haven't yet.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ gem install sass\n" +
    "    $ npm -g install gulp bower\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      After that, install\n" +
    "      <code>angular-kickstart</code> - download the <a href=\"https://github.com/vesparny/angular-kickstart/releases/latest\">latest</a> release (or clone the master branch if want to run the development version). Unzip the project and cd into it, then\n" +
    "      install bower and npm dependencies, and run the application in development mode.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ npm install\n" +
    "    $ bower install\n" +
    "    $ gulp serve\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      You are now ready to go, your applcation is available at <code>http://127.0.0.1:3000</code>.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      You are now ready to start coding, every file you add, edit or delete into the\n" +
    "      <code>/client</code> folder, will be handled by the build system and the browser will reload.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "      When you are ready to build a production release there is a task for that.\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    $ gulp serve:dist\n" +
    "    </code>\n" +
    "</pre>\n" +
    "\n" +
    "    <p>\n" +
    "      This task will lint your code, optimize css js and images files, run unit tests. After the task has successfully finished, you can find an optimized version of your project in the\n" +
    "      <code>/build/dist</code> folder.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      Other tasks are available:\n" +
    "    </p>\n" +
    "\n" +
    "    <pre>\n" +
    "    <code>\n" +
    "    #for developing running unit test on every file change.\n" +
    "    $ gulp serve:tdd\n" +
    "\n" +
    "    #for running e2e test. (you application should be running on http://127.0.0.1:3000)\n" +
    "    $ gulp test:e2e\n" +
    "\n" +
    "    #for running unit tests one time then exit.\n" +
    "    $ gulp test:unit\n" +
    "    </code>\n" +
    "</pre>\n" +
    "    <p class=\"text-center\">\n" +
    "      <a href=\"https://github.com/vesparny/angular-kickstart/#readme\" target=\"_blank\" class=\"pure-button button-xlarge pure-button-primary\">\n" +
    "        Full documentation on GitHub\n" +
    "      </a>\n" +
    "    </p>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);
})();
