# VECTORZ

Site vitrine en français pour les solutions logistiques pharmaceutiques, médicales et parapharmaceutiques VECTORZ. Next.js avec Pages Router, React et Tailwind CSS.

## Développement et validation

```sh
npm install
npm run dev
npm run lint
npm run build
npm run start
```

La compilation récupère la police Outfit depuis Google Fonts et nécessite un accès réseau.

## Contenu

Les offres, les 25 wilayas et les coordonnées sont centralisées dans `utils/CONSTS.js`. La page principale est assemblée dans `pages/index.js`. L’architecture éditoriale de référence se trouve dans `docs/architecture-contenu-vectorz.md`.

Le groupage dessert les wilayas listées avec des départs le samedi, le lundi et le mercredi. Le transport dédié national est présenté sous réserve d’étude. Les conditions de température, de suivi et de preuve restent dépendantes de la prestation convenue.

## Demandes de contact

Le formulaire prépare localement une demande structurée. Le visiteur peut ouvrir sa messagerie via un lien `mailto:` ou copier la demande et l’envoyer à `vectorzcourrierexpress@gmail.com`. Il n’y a pas d’envoi automatique, de stockage serveur ni de confirmation de réception. Le formulaire Tally historique a été retiré ; aucun accès à son compte externe n’était disponible.

Pour un envoi directement depuis le site, il faudra configurer un formulaire hébergé ou un service d’envoi et vérifier sa réception. Ne pas afficher de message « envoyé » avant une confirmation réelle de ce service.

## Vérifications réalisées

Compilation de production, ESLint, affichage ordinateur et mobile, absence de débordement horizontal à 375 / 768 / 1024 px, navigation mobile, présélection des offres et génération du lien e-mail. Aucun e-mail de test envoyé et aucune publication effectuée.
