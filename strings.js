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
    "mom": {
      "en": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
        "Your growing bump might continue to take you by surprise at this stage of pregnancy, and could seldom leave you feeling a bit unsteady on your feet as your centre of gravity shifts! Take care as you get up and down from your chair – try to avoid standing suddenly and getting that rush of blood to the head feeling.","test second column",
        "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"],
      "es": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
        "24",
        "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"]
    },
    "baby1": {
      "en": ["0",
        "Your son or daughter – because yes, their sex is already decided this early! – is growing faster now than at any other point in your pregnancy, and their brain, heart and spine are already forming. It's doubtful you are feeling any signs of their presence this early though.",
        "Your baby's sex has already been decided, and their major organs are all beginning to form. Because of how pregnancy is calculated, you are actually already one month pregnant at this stage – only eight more to go until you meet your baby! ",
        "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
        "Your baby will now be around a foot long, and the size of an ear of corn. They weigh around 600g and will be gaining more every week.  At 24 weeks into your pregnancy, your baby would be considered viable and with a chance of survival if they were born prematurely",
        "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"],
      "es": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
        "Tu bebe esta midiendo alrededor de 30 cm y es del tamaño de un choclo. Pesa alrededor de 600 grs. Su cara esta completamente formada con pestañas, cejas y pelo. ",
        "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"]
    },
    "baby2": {
      "en": ["0",
        "",
        "",
        "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
        "Even though your baby is mainly just laying down flat now, there are some changes also taking place within their body. Their little lungs are now maturing so they can breathe air rather than fluid, and their ears are starting to further develop so they can properly work out sounds – mainly your heartbeat and voice!",
        "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"],
      "es": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
        "Tu bebe esta midiendo alrededor de 30 cm y es del tamaño de un choclo. Pesa alrededor de 600 grs. Su cara esta completamente formada con pestañas, cejas y pelo. ",
        "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"]
    }
  },
};

module.exports = {
  words: words
}