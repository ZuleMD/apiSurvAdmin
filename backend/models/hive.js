const mongoose = require('mongoose');

const hiveSchema = new mongoose.Schema({

  Color: { type: String, required: true },
  Type: { type: String,  required: true },
  Source: { type: String, required: true },
  Purpose: { type: String, required: true },
  Added: { type: Date,  required: true, default: Date.now },

  Colony: {
    strength: { type: String,  required: true },
    temperament: { type: String, required: true },
    supers: { type: Number, required: true },
    frames: { type: Number, required: true },
    honeyframes: { type: Number},
    note: { type: String},

  },

  Queen: {
    seen: { type: Boolean},
    isMarked: { type: Boolean},
    color: { type: String },
    hatched: { type: Number},
    status: { type: String },
    installed: { type: Date },
    queen_state: { type: String},
    race: { type: String },
    clipped: { type: Boolean},
    origin: { type: String  },
    temperament: { type: String },
    note: { type: String},

    queencells: { type: String},
    isSwarmed: { type: Boolean}

  }
  ,
  Apiary: { type: mongoose.Schema.Types.ObjectId, ref: 'Apiary', required: true },

}, {
  timestamps: true,
});

const Hive = mongoose.model('Hive', hiveSchema);

module.exports = Hive;
