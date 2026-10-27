from flask import Flask, send_from_directory
import os

app = Flask(__name__)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))


@app.route("/")
def index():
  return send_from_directory(os.path.join(BASE_DIR, "templates"), "index.html")


@app.route("/01")
def laboratorio_01():
  lab_path = os.path.join(BASE_DIR, "01-radial-dock-menu")
  return send_from_directory(lab_path, "index.html")


@app.route("/01/<path:filename>")
def archivos_laboratorio_01(filename):
  """Esto intercepta cualquier archivo que pida el laboratorio 01

  (como style.css o script.js) y lo sirve correctamente.
  """
  lab_path = os.path.join(BASE_DIR, "01-radial-dock-menu")
  return send_from_directory(lab_path, filename)


@app.route("/02")
def laboratorio_02():
  lab_path = os.path.join(BASE_DIR, "02-sliding-auth-panel")
  return send_from_directory(lab_path, "index.html")


@app.route("/02/<path:filename>")
def archivos_laboratorio_02(filename):
  lab_path = os.path.join(BASE_DIR, "02-sliding-auth-panel")
  return send_from_directory(lab_path, filename)


@app.route("/03")
def laboratorio_03():
  lab_path = os.path.join(BASE_DIR, "03-animated-lamp-login")
  return send_from_directory(lab_path, "index.html")


@app.route("/03/<path:filename>")
def archivos_laboratorio_03(filename):
  lab_path = os.path.join(BASE_DIR, "03-animated-lamp-login")
  return send_from_directory(lab_path, filename)


@app.route("/04")
def laboratorio_04():
  lab_path = os.path.join(BASE_DIR, "04-modern-menu-sound")
  return send_from_directory(lab_path, "index.html")


@app.route("/04/<path:filename>")
def archivos_laboratorio_04(filename):
  lab_path = os.path.join(BASE_DIR, "04-modern-menu-sound")
  return send_from_directory(lab_path, filename)


@app.route("/05")
def laboratorio_05():
  lab_path = os.path.join(BASE_DIR, "05-css-spinner")
  return send_from_directory(lab_path, "index.html")


@app.route("/05/<path:filename>")
def archivos_laboratorio_05(filename):
  lab_path = os.path.join(BASE_DIR, "05-css-spinner")
  return send_from_directory(lab_path, filename)

if __name__ == "__main__":
  app.run(debug=True, port=5001)