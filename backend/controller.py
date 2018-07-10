"""
Virtual Subscriber Backend Controller implementation.
"""
from flask import Flask, Blueprint

from api import api
from api.nominations import ns as noms_namespace

from database import db

import settings

app = Flask(__name__)


def configure_app(flask_app):
    """
    Configure flask_app with the settings from settings.py.

    :param Flask flask_app: The Flask application to configure.
    """
    flask_app.config['RESTPLUS_SWAGGER_UI_DOC_EXPANSION'] = \
        settings.RESTPLUS_SWAGGER_UI_DOC_EXPANSION
    flask_app.config['RESTPLUS_VALIDATE'] = \
        settings.RESTPLUS_VALIDATE

    flask_app.config['SQLALCHEMY_DATABASE_URI'] = \
        settings.SQLALCHEMY_DATABASE_URI
    flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = \
        settings.SQLALCHEMY_TRACK_MODIFICATIONS


def initialize_app(flask_app):
    """
    Initialize the application API.

    :param Flask flask_app: The Flask application to configure.
    """
    # Create a blueprint to house the API, swagger can be reached from /api
    # and each of the models from /api/[model]
    blueprint = Blueprint('api', __name__, url_prefix='/api')
    api.init_app(blueprint)

    # Configure namespaces per model on the API.
    api.add_namespace(noms_namespace)

    flask_app.register_blueprint(blueprint)
    db.init_app(flask_app)

    with flask_app.app_context():
        db.create_all()


if __name__ == '__main__':
    configure_app(app)
    initialize_app(app)
    app.run(host=settings.FLASK_HOST, port=settings.FLASK_PORT,
            debug=settings.FLASK_DEBUG)

if __name__ != '__main__':
    configure_app(app)
    initialize_app(app)
