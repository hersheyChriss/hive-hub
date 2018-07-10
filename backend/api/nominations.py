"""
Nominations API Implementation
"""
from flask import request
from flask_restplus import Resource
from api import api
from database import db
from database.nomination import Nomination
from api.serializers import nomination

ns = api.namespace('nominations', description='Nomination operations')


def create_nom(data):
    """
    Add a nomination to the database.

    :param dict data: The JSON representing the nomination
    """
    name = data.get('name')
    pic_path = data.get('pic_path')
    seconded = data.get('seconded')
    votes = data.get('votes')
    nom = Nomination(name, pic_path, seconded, votes)
    db.session.add(nom)
    db.session.commit()


def update_nom(nom_name, data):
    """
    Update a nom in the database.

    :param string nom_name: The string representing a nomination name
    :param dict data: The JSON representing a nomination
    """
    nom = Nomination.query.filter(Nomination.name == nom_name).one()
    nom.pic_path = data.get('pic_path')
    nom.seconded = data.get('seconded')
    nom.votes = data.get('votes')
    db.session.add(nom)
    db.session.commit()


def delete_nom(nom_name):
    """
    Delete a nom from the database.

    :param dict data: The JSON representing an nom.
    """
    nom = Nomination.query.filter(Nomination.name == nom_name).one()
    db.session.delete(nom)
    db.session.commit()


@ns.route('/')
class NominationsCollection(Resource):
    """
    Operations upon a collection of nominations.
    """

    @api.marshal_list_with(nomination)
    def get(self):
        """
        Return a list of nominations.
        """
        return Nomination.query.all()

    @api.response(201, 'Nomination successfully created.')
    @api.expect(nomination)
    def post(self):
        """
        Creates a new Nomination.
        """
        create_nom(request.get_json())
        return None, 201
