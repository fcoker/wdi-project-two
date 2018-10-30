const Circuit = require('../models/circuit');

function commentsCreate(req, res){
  Circuit
    .findById(req.params.id)
    .then(circuit => {
      circuit.comments.push(req.body);
      circuit.save().then(circuit=> res.redirect(`/circuits/${circuit.id}`));
    });
}

 
function commentsDelete(req, res) {
  Circuit
    .findById(req.params.circuitId)
    .then(circuit => {
      circuit.comments.id(req.params.commentId).remove();
      circuit.save().then(() => res.redirect(`/circuits/${circuit.id}`));
    });
}

module.exports ={
  commentsCreate: commentsCreate,
  commentsDelete: commentsDelete
};
