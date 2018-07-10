"""
API object definition and configuration.
"""
from flask_restplus import Api, Resource

api = Api(version='1.0', title='Hive Hub API',
          description='REST API for the Hive Hub')
