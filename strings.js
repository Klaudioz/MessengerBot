'use strict';

var words = {
  "greetings": {
    "en": "Hello",
    "es": "Hola"
  },
  "welcome": {
    "en": "Welcome to BabyProgress !!, I'll be sending to you information about the progress of your baby.\nBut before I've to ask you something:",
    "es": "Bienvenido a BabyProgress !!, te estaré enviando información sobre el progreso de tu bebe.\nPero antes debo hacerte una pregunta:"
  },
  "first_question": {
    "en": "Please, tell me the due date or the first day of last menstrual period.",
    "es": "Por favor dime la fecha estimada del nacimiento de tu bebe o la de la ultima menstruación."
  },
  "first_question_btn": {
    "en": ["Due date", "Last period date"],
    "es": ['Fecha nacimiento', 'Última menstruación']
  },
  "asking_due_day": {
    "en": "Please, tell me the due date day.",
    "es": "Por favor ingresa la fecha estimada del nacimiento."
  },
  "asking_menstrual_day": {
    "en": "Please, tell me the first day of last menstrual period.",
    "es": "Por favor ingresa la fecha de tu ultima menstruación."
  },
  "your_week": {
    "en": "You're in week",
    "es": "Vas en la semana"
  },
  "months": {
    "en": ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
    "es": ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  },
  "pictures": {
    "url": ['0', '1', 'http://assets.babycenter.com/ims/2015/01/pregnancy-week-2-fertilization_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-3-blastocycst_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-4-yolk-sac_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-5-amniotic-sac_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-6-webbed-hands_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-7-tailbone_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-8-brain-nerve-cells_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-9-finger-touch-pads_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-10-fingernails_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-11-tooth-buds_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-12-eyelids_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-13-fingerprints_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-14-face-muscles_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-15-lung-development_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-16-heart-development_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-17-skeleton_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-18-ears_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-19-hair_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-20-fetal-movement_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-21-eyelid_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-22-eyes_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-23-hearing_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-24-lung-development_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-25-baby-fat_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-26-ear-nerves_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-27-sleep_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-28-eyelashes_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-29-brain-development_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-30-amniotic-fluid_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-31-taste-buds_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-32-fingernails_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-33-skull_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-34-lung-development_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-35-fetal-weight_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-36-vernix-caseosa_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-37-hair-growth_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-38-eye-color_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-39-mature-lungs_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-40-soft-spots_4x3.jpg',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-41-amniotic-fluid_4x3.jpg']
  },
  "weeks": {
    "en": ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
      "Your baby is growing steadily, having gained about 4 ounces since last week. That puts him at about 1 1/3 pounds.",
      "With her sense of movement well developed by now, your baby can feel you dance. And now that she's more than 11 inches long and weighs just over a pound (about the size of a large mango), you may be able to see her squirm underneath your clothes. Blood vessels in her lungs are developing to prepare for breathing, and the sounds that your baby's increasingly keen ears pick up are preparing her for entry into the outside world. Loud noises that become familiar now – such as your dog barking or the roar of the vacuum cleaner – probably won't faze her when she hears them outside the womb.",
      '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    "es": []
  },
};

module.exports = {
  words: words
}