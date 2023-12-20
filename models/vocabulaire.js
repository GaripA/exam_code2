import Model from './Model.js';

export default class Vocabulaire extends Model {

  static table = "vocabulaire.listedevocabulaire"; //shema.tables
  static primary = ["id"];
}
