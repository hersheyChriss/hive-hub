"""
Serialization specifications for the REST API.
"""
from flask_restplus import fields
from api import api

nomination = api.model('Nomination', {
    'name': fields.String(required=True, description='The name of the nomination'),
    'pic_path': fields.String(description='The local path to the inserted picture'),
    'seconded': fields.Boolean(description='Indicates whether or not the nomination has been seconded'),
    'votes': fields.Integer(description='The number of votes that the nomination has received')
})
