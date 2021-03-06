exports.name = 'user';
exports.version = '1.00';
exports.enabled = true;
exports.description = 'Gestion des utilisateurs';
exports.rights = [{
        "desc": "Consulter les autres utilisateurs",
        "perm": {
            "read": true
        }
    },
    {
        "desc": "Consulter les permissions des autres utilisateurs",
        "perm": {
            "readperms": false
        }
    },
    {
        "desc": "Creer/modifier utilisateurs internes et externes",
        "perm": {
            "write": false
        }
    },
    {
        "desc": "Creer/modifier utilisateurs externes seulement",
        "perm": {
            "writeExterne": false
        }
    },
    {
        "desc": "Modifier le mot de passe des autres utilisateurs",
        "perm": {
            "password": false
        }
    },
    {
        "desc": "Supprimer ou desactiver les autres utilisateurs",
        "perm": {
            "delete": false
        }
    },
    {
        "desc": "Consulter ses propres permissions",
        "perm": {
            "self_readperms": false
        }
    },
    {
        "desc": "Creer/modifier ses propres infos utilisateur",
        "perm": {
            "self_update": false
        }
    },
    {
        "desc": "Modifier son propre mot de passe",
        "perm": {
            "self_password": false
        }
    },
    {
        "desc": "Exporter les utilisateurs",
        "perm": {
            "export": false
        }
    },
    {
        "desc": "Voir/modifier les conges/absences des utilisateurs",
        "perm": {
            "holidayAll": false
        }
    }
];
exports.menus = {
    "menu:parameters": {
        "position": 1000,
        "url": "",
        "enabled": "settings.read",
        "usertype": 2,
        "title": "Parameters",
        "icon": "fa-cogs",
        "submenus": {}
    }
};