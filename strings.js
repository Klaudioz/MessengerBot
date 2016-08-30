'use strict';

var words = {
  "greetings": {
    "en": "Hello",
    "es": "Hola"
  },
  "welcome": {
    "en": "Welcome to BabyProgress !, I'll be sending to you weekly information about the progress of your baby.\nBut before I've to ask you just 2 questions:",
    "es": "Bienvenido a BabyProgress !, te estaré enviando información semanalmente sobre el progreso de tu bebe.\nPero antes debo hacerte solo 2 preguntas:"
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
    "en": "Week",
    "es": "Semana"
  },
  "pictures": {
    "url": [
      '0',
      '1',
      'http://assets.babycenter.com/ims/2015/01/pregnancy-week-2-fertilization_4x3.jpg',
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

  "length": {
    "en": ["0", "0", "0", "0", "0", "0", "0", "0", "0.63 inch", "0.90 inch", "1.22 inch", "1.61 inch", "2.13 inches", "2.91 inches", "3.42 inches", "3.98 inches", "4.57 inches", "5.12 inches", "5.59 inches", "6.02 inches", "6.46 inches", "10.51 inches", "10.94 inches", "11.38 inches", "11.81 inches", "13.62 inches", "14.02 inches", "14.41 inches", "14.80 inches", "15.2 inches", "15.71 inches", "16.18 inches", "16.69 inches", "17.20 inches", "17.72 inches", "18.19 inches", "18.66 inches", "19.13 inches", "19.61 inches", "19.96 inches", "20.16 inches", "20.35 inches", "20.28 inches"],
    "es": ["0", "0", "0", "0", "0", "0", "0", "0", "1.6 cm", "2.3 cm", "3.1 cm", "4.1 cm", "5.4 cm", "7.4 cm", "8.7 cm", "10.1 cm", "11.6 cm", "13 cm", "14.2 cm", "15.3 cm", "16.4 cm", "26.7 cm", "27.8 cm", "28.9 cm", "30 cm", "34.6 cm", "35.6 cm", "36.6 cm", "37.6 cm", "38.6 cm", "39.9 cm", "41.1 cm", "42.4 cm", "43.7 cm", "45 cm", "46.2 cm", "47.4 cm", "48.6 cm", "49.8 cm", "50.7 cm", "51.2 cm", "51.5 cm", "51.7 cm"]
  },

  "weight": {
    "en": [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0.63 inch", "0.04 ounce"], ["0.90 inch", "0.07 ounce"], ["1.22 inch", "0.14 ounce"], ["1.61 inch", "0.25 ounce"], ["2.13 inches", "0.49 ounce"], ["2.91 inches", "0.81 ounce"], ["3.42 inches", "1.52 ounce"], ["3.98 inches", "2.47 ounces"], ["4.57 inches", "3.53 ounces"], ["5.12 inches", "4.94 ounces"], ["5.59 inches", "6.70 ounces"], ["6.02 inches", "8.47 ounces"], ["6.46 inches", "10.58 ounces"], ["10.51 inches", "12.70 ounces"], ["10.94 inches", "15.17 ounces"], ["11.38 inches", "1.10 pound"], ["11.81 inches", "1.32 pound"], ["13.62 inches", "1.46 pound"], ["14.02 inches", "1.68 pound"], ["14.41 inches", "1.93 pound"], ["14.80 inches", "2.22 pounds"], ["15.2 inches", "2.54 pounds"], ["15.71 inches", "2.91 pounds"], ["16.18 inches", "3.31 pounds"], ["16.69 inches", "3.75 pounds"], ["17.20 inches", "4.23 pounds"], ["17.72 inches", "4.73 pounds"], ["18.19 inches", "5.25 pounds"], ["18.66 inches", "5.78 pounds"], ["19.13 inches", "6.30 pounds"], ["19.61 inches", "6.80 pounds"], ["19.96 inches", "7.25 pounds"], ["20.16 inches", "7.63 pounds"], ["20.35 inches", "7.93 pounds"], ["20.28 inches", "8.12 pounds"]],
    "es": [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["1.6 cm", "1 gr"], ["2.3 cm", "2 grs"], ["3.1 cm", "4 grs"], ["4.1 cm", "7 grs"], ["5.4 cm", "14 grs"], ["7.4 cm", "23 grs"], ["8.7 cm", "43 grs"], ["10.1 cm", "70 grs"], ["11.6 cm", "100 grs"], ["13 cm", "140 grs"], ["14.2 cm", "190 grs"], ["15.3 cm", "240 grs"], ["16.4 cm", "300 grs"], ["26.7 cm", "360 grs"], ["27.8 cm", "430 grs"], ["28.9 cm", "501 grs"], ["30 cm", "600 grs"], ["34.6 cm", "660 grs"], ["35.6 cm", "760 grs"], ["36.6 cm", "875 grs"], ["37.6 cm", "1.05 kg"], ["38.6 cm", "1.15 kg"], ["39.9 cm", "1.32 kg"], ["41.1 cm", "1.5 kg"], ["42.4 cm", "1.7 kg"], ["43.7 cm", "1.92 kg"], ["45 cm", "2.15 kg"], ["46.2 cm", "2.38 kg"], ["47.4 cm", "2.62 kg"], ["48.6 cm", "2.86 kg"], ["49.8 cm", "3.08 kg"], ["50.7 cm", "3.29 kg"], ["51.2 cm", "3.46 kg"], ["51.5 cm", "3.6 kg"], ["51.7 cm", "3.69 kg"]]
  },

  "weeks": {
    "mom": {
      "en": [
        "",
        "If you have been trying to conceive, you've hopefully been taking folic acid supplements already, but if you haven't, now's the time to start – check out our nutrition and supplements page to find out why this is so important for your developing baby.",
        "2",
        "3",
        "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
        "Your growing bump might continue to take you by surprise at this stage of pregnancy, and could seldom leave you feeling a bit unsteady on your feet as your centre of gravity shifts! Take care as you get up and down from your chair – try to avoid standing suddenly and getting that rush of blood to the head feeling.", "test second column",
        "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"],
      "es": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
        "24",
        "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"]
    },
    "baby1": {
      "en": [
        "",
        "Your son or daughter – because yes, their sex is already decided this early! – is growing faster now than at any other point in your pregnancy, and their brain, heart and spine are already forming. It's doubtful you are feeling any signs of their presence this early though.",
        "By the time your period is due, you will have been pregnant for around two weeks, yet any inkling that you might be will probably come from wondering when your period is going to show, rather than actually feeling any pregnancy symptoms.",
        "The joining of your partner's sperm and your egg at the moment of conception resulted in a ball of cells which is now starting the 6 day journey from the fallopian tube to the uterus where it will attach itself to the lining of your womb – and in nine months’ time, will result in a real live baby in your arms!",
        "Your growing baby is not even 3mm long yet and still not much bigger than a poppy seed. Despite the tiny size there’s plenty going on as the embryo splits into three different sections.",
        "At five weeks gestation, they will be around 5mm long, and their heart, brain and spine will be developing at a pace. Soon, your baby's heart will actually start beating, and if you have an early scan in the coming weeks, you would see it flickering on the monitor.",
        "If you can imagine a tiny poppy seed, that’s the size of your growing baby's heart now. Their heart is also changing from being a simple, single tube to a complex four chamber organ which will pump blood around their body. How amazing!",
        "Your baby is continuing to grow at a remarkable pace, its embryonic form is slowly starting to transform into an actual little person, with emerging arm and leg buds, and a beating heart – how amazing? They also have a tiny tail – but that will soon disappear!",
        "At eight weeks your baby is around two centimetres long now – still minuscule, but growing and developing every day. At this point in your pregnancy your baby is growing at around 1 millimetre per day, and the amniotic fluid in your womb increases by two tablespoons a week.",
        "Your baby's organs, nerves and muscles are all starting to function now and although you won’t be able to feel it, their tiny heart is now beating strong enough to be picked up by ultrasound devices like a Doppler, although this isn’t always possible depending on the position of your baby in the uterus.",
        "Your baby is continuing to develop into a real little person! The most critical stage of their development is now complete, and they are starting to enter the ‘foetal period’ where tissues and organs grow rapidly and begin to mature. Size wise they're now around 3.8cm long ",
        "It won't be long before your baby is fully formed even at only 4cm long, and will then spend the rest of the pregnancy growing (as will you!). They already have little fingernails in place and their hands will soon start to open and close. Though it’s still too soon to tell the gender by ultrasound.",
        "Your baby is now a compact 6cm in length, and fully formed – the next stage of their development is to grow larger and practise sucking and breathing motions. It’s likely you’ll see your baby for the first time this week at your dating scan, though it’s unlikely you'll be able to get a reliable sexing just yet.",
        "Your baby is around 7.5cm long and about the size of an egg, weighing about 25g. Even at this small size they’ve already learned some party tricks – kicking their legs, turning their head – even swallowing, yawning and hiccupping! How amazing is it that they are so active and developed, yet so tiny?",
        "Size-wise, your little one is around 8cm long or around half a banana in length, weighing 42 grams and growing bigger and stronger every day. Your baby’s arms are now in proportion with their body, but their legs still have a bit more growing to do until your baby is fully in proportion.",
        "Your baby is now in proportion size wise, with their body having caught up with their head in terms of growth. They will now be around 11.5cm long, around the size of an orange and growing quickly!. Your baby can recognise light and if you were to shine a light on your belly the baby might move away from it.",
        "Your baby is around 11.5cm long now and about the size of an avocado. All their limbs and joints are now fully formed – and they’re probably enjoying giving them all a good stretch and flex! They might also have 'found' their thumb and worked out how to suck it by now, too. How cute is that?",
        "Your little one is piling on the pounds now and is growing very quickly. They weigh around 150g and would fit in the palm of your hand. Their little face looks entirely human, especially as their eyebrows and eyelashes. Despite this, their eyelids are still fused shut, although they can move their eyes around.",
        "By week 18 your baby will be about 14cm long, weighing around 200g and similar to a bell pepper in size. Their nerves will now be forming a protective covering of myelin which is vital for their nervous system to develop and function properly after birth.",
        "Your baby now weighs more that your placenta, but doesn't yet have much in the way of body fat. They’ll measure around 14cm long, weigh 240g and will be about the size of a mango. Although they’re still small, it’s possible you might start to feel small movements from your baby as they continue to develop.",
        "By week 20, your baby will now measure around 16.5cm long, head to rump and around 25cm from head to heel. They are around the size of a banana and growing quickly!. If space allows, they are still having fun turning somersaults, and perhaps still taking you by surprise as they do so. ",
        "At week 21 the average baby will measure around 27cm long and weigh around 360g but this will vary from baby to baby. They’re starting to gain weight now, and laying down some fat, which will give them that adorable chubby newborn appearance the moment you first set eyes on them!",
        "Your baby is around 27cm, about the size of a papaya and continuing to grow. Your placenta will also keep growing over your pregnancy, providing nourishment for your little one. Amazingly, your baby’s gums are already developing tooth buds, ready for their first teeth to come through a few months after birth.",
        "Your baby is close to 30cm long, weighing around 500g and has the proportions of a new-born now, although not as much fat, so they still have some bulking out to do, but there is plenty of time left for them to do that.",
        "Your baby will now be around a foot long, and the size of an ear of corn. They weigh around 600g and will be gaining more every week.  At 24 weeks into your pregnancy, your baby would be considered viable and with a chance of survival if they were born prematurely",
        "At twenty five weeks into your pregnancy, your baby has its own little routine going on in your womb! They will play (turning somersaults, wriggling around!) and then have a little nap to recover! They will also enjoy hearing your voice at this stage, and may move around in response to it. ",
        "Your baby has grown a lot in the past few months, weighing around 2lbs, and is approximately 35.5cm long – can you believe how quickly time has gone?. If they were born early, they would now have a very good chance of survival with specialist care.",
        "At week 27, your baby is 36cm long, weighing 875g and about the size of a head of cauliflower. Your baby might start to open their eyes, and begin to distinguish between night and day. Their little hiccups in the womb might radiate through your tummy, meaning you feel all their little burbs and shudders!",
        "Your baby weighs around 2.5lbs now, is around 38cm long perfectly formed. Its heartbeat is so strong that your partner might be able to hear it if he put their ear on your bump!. Your baby can now blink their eyes, and their eyesight has developed to the point where they'll be able to see your face when breastfeeding!.",
        "Now the average baby measures around 39cm and might weigh close to 2lbs. Their skin is smoothing out as they continue to put on fat which is now for energy rather than temperature regulation. Your baby's eyes are starting to focus now, too – just imagine how their little world currently appears to them!",
        "Your baby is fully developed, but there is still some fine tuning going on as the final pieces of the intricate baby-making jigsaw are put in place!. Your baby will measure around 39cm in length now, weighing around 3lbs and is continuing to put on weight.",
        "At week 31 the average baby will be around 40cm long, likely weighing close to 3lbs and although they will not get much longer at this stage, but they will continue to put on weight each week. Their arms, legs and body are now in proportion with their head and their organs are continuing to develop",
        "Your growing baby is now around 48cm long and weighs about 4lbs. They’re so well developed and turning into such a real little person that their finger nails are even sprouting in the womb. If you go overdue, you might find they are born with long nails that will need an immediate trim!",
        "Your baby is now around 3-4lbs and 44cm long. They might already have a head of hair, and will have perhaps shifted position and gone head down in your womb, with their little legs folded up to their chest. This engaged position readies them to move further down into your pelvis in preparation for birth!",
        "Your baby will now weigh close to 5lbs and measure up at about 45cm long. Their skin is increasingly smooth and rounded as they continue to gain weight and fill out with fat. Your little one should continue to move normally throughout pregnancy and you should even continue to feel them while you are in labour.",
        "Your baby has only a few weeks left 'inside' and they are now almost ready for life outside the womb! They’ll probably weigh in at around 5.5lbs and close to 50cm in length. They are doing lots of practise sucking movements ready to latch on for that first post-birth feed, and will be starting to move further down your pelvis ready for D-day.",
        "Your baby is really getting themselves ready to meet you now! They are moving further down your pelvis ready to engage (if they haven't already), and putting on those last few ounces of weight. The average baby weighs around 7.5lbs at birth, so your little one has a bit more to gain just now.",
        "Your baby now weighs close to 3kg (but will be gaining about half a pound a week) and will be around 50cm long from head to toe. They’re now considered full term and ready to meet you! Whether they do or not in the coming days is another matter entirely, and lots of first babies do stay put for a bit longer!",
        "Your baby is completely ready to be born now, and is at full term. The average weight at 38 weeks is around 7lbs but of course this will vary with each baby. Developmentally and size-wise they are absolutely perfect little newborns, and the only remaining part of their pregnancy journey is meeting mum and dad!",
        "Like you, your baby is just waiting for the signal to go now, and is ready to make their début! Fully grown at close to 50cm and weighing 7 to 8lbs, they’re head down and waiting for those first lovely moments of skin to skin contact and that first feed with mum!",
        "Once you are at week 40, your baby is more than ready to be delivered, and you are no doubt more than ready to meet them! They’re likely to be around 50cm now and weighing between 6 and 8lbs which is a healthy weight."
      ],
      "es": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
        "Tu bebe esta midiendo alrededor de 30 cm y es del tamaño de un choclo. Pesa alrededor de 600 grs. Su cara esta completamente formada con pestañas, cejas y pelo. ",
        "25",
        "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"]
    },
    "baby2": {
      "en": ["",
        "1",
        "Your baby's sex has already been decided, and their major organs are all beginning to form. Because of how pregnancy is calculated, you are actually already one month pregnant at this stage – only eight more to go until you meet your baby!",
        "Amazingly, the sex of your baby has already been determined. The fertilised egg contains 46 chromosomes with 23 from you and 23 from the dad. You as mum will always provide the X chromosome but the dad can provide an X or Y chromosome. XX and you’ll be having a girl, XY and you’ll have a little boy in 9 months’ time!",
        "In one section the brain and central nervous system are already beginning to take shape as their neural tubes develop. In the other two sections, the heart and circulatory system are already beginning to form and the lungs and intestines are in the very early stages of development.",
        "Your baby’s head is also seeing signs of development with the neural tube developing (the start of the connection between their spinal cord and brain) which will help to regulate your baby’s vital functions along with heart rate and blood supply.",
        "All your baby's other vital organs – the kidneys, lungs and liver – are now in place too, but they still have a lot of developing left to do. The little buds which will eventually become their arms and legs are also starting to develop.",
        "Amazingly your baby has already gone through three sets of kidneys by week 7, but this week they’ll start developing their final set which will be ready for waste management. In the coming weeks your baby will start to produce urine which will form part of the amniotic fluid.",
        "Your baby’s tiny little fingers and toes will have formed, though right now they are webbed and will continue to be so for several weeks, and their heart will be beating an amazing 160 beats a minute! Your baby’s lungs are developing this week, with the breathing tube extending from the throat to the lungs.",
        "Their ears are also starting to develop, and their eyelids are now in place but will be fused shut until week 26. Meanwhile their little fingers and toes are starting to change from being titchy buds into actual digits.",
        "Their jawbones are beginning to form, and, amazingly, they contain their future milk teeth already, though they won’t break through the gums until your little one is around 6 months old. Your baby's little heart is now fully formed, and beating two to three times faster than yours.",
        "At 11 weeks your baby’s head is already quite well developed and all the bones in their face are now present. Around this time the ears will have migrated closer to their final location, the tongue and palate will be present in the mouth and there will be open nasal passages at the tip of their nose.",
        "They are moving around a lot at this stage, but you still won't be able to feel this for a while as they still have a lot of space to bob about in. At 12 weeks pregnant your baby’s skeleton is currently made of cartilage (like you’d find in your nose or ear), but over the coming weeks this will harden into bone.",
        "Your baby’s skeleton is starting to develop with the clavicle (collarbone) and femur (thigh bone) developing first. Along with the skeleton, their organs continue to grow with their stomach and bowel taking shape as well as their vocal chords (which will get a lot of use in a few months’ time!)",
        "Your baby is really starting to take on the look of a real little person now, with their hair and eyebrows beginning to grow, and they’re starting to develop their own set of fingerprints in place on their tiny fingers! They’ll be making the most of these tiny digits and might now be able to suck their thumb.",
        "They will also be developing their sucking, gasping and swallowing skills and have such sophisticated taste buds that if they had conscious thought, they’d be able to recognise flavours!. By week 15 they can also hear your voice now, so be sure to chat and sing to them often (like you aren't already!).",
        "Now that their backbone has become stronger your baby will start to straighten out their head and neck more. Their nervous system is also making connections to all their muscles so you might find your baby starts to move with a little more purpose and also now has reflexes.",
        "Your baby’s heartbeat is now being regulated by the brain, it’ll still be beating at between 140-150 beats per minute. Amazingly, your baby’s toes and fingers will form their own unique patterns this week as they develop the fingerprints that will stay with them for the rest of their lives.",
        "Your baby is using your tummy as quite a little activity gym by week 18 and doing a whole lot of kicking, rolling and tumbling around. Now that they have developed a grip, they will be grasping hold of their umbilical cord too – a built-in play thing!",
        "Your baby’s arms and legs are now in proportion and moving with more limb control as the cartilage begins hardening to bone. Their skin is now losing its translucent look and beginning to develop pigment which will determine their skin tone. It’s also possible begin to develop hair on their scalp.",
        "Although they are mainly just growing bigger and stronger now, there are some key elements of their development going on as the nerves in their brain which control the senses are still forming, eventually enabling them to smell, see, hear, taste and touch.",
        "Their eyebrows and eyelids have now formed and it’s possible for them to blink. Amazingly your baby'll now already have taste buds and can taste various flavours depending on what you’re eating and what’s entering the Amniotic fluid. They will be swallowing this fluid now as they practice their technique.",
        "Their eyes will also have formed, but due to a lack of pigment in their iris they won’t have an eye colour yet. It’s also common for baby’s to be born with one eye colour but for them to change in the first few months. Their other organs continue to grow with their pancreas producing essential hormones and their lungs.",
        "Their eyes are now fully formed but they don't have any colour yet. There is probably still just enough space for your baby to be turning somersaults – although probably not for much longer. It’s also possible that you might be able to see your baby moving under your clothes if they decide to be particularly active!.",
        "Even though your baby is mainly just laying down flat now, there are some changes also taking place within their body. Their little lungs are now maturing so they can breathe air rather than fluid, and their ears are starting to further develop so they can properly work out sounds – mainly your heartbeat and voice!",
        "They might get excited by other noises too, and you may well feel them having a bit of a boogie to certain sounds, but music might get them into the groove, too! Talking and singing to your baby is as important as ever at this stage in your pregnancy, and you might even want to read to them, as well.",
        "Your baby will start to practice making breathing movements now, breathing in the surrounding amniotic fluid, all ready for when they take their first gasps of air after delivery!. Their eyes will also start to open now, although their vision will still be underdeveloped but this will change over the coming weeks.",
        "Your baby's brain is now also going through its final stages of fine tuning with some last minute fast and furious development. Along with their developed brain, your baby now has very developed taste buds. If you eat spicy food it’s possible it’ll make your baby hiccup, but don’t worry they’ll pass fairly quickly.",
        "Their brain is also continuing its development ready for the outside world and the thalamocortical complex begins to be active. This is the part of the brain thought to be responsible for consciousness and is an important part of the brains development!",
        "Amazingly the buds in their gums for their baby teeth have already formed, and they’re now beginning to develop buds ready for the permanent to teeth. If you’re having a boy, their testicles will have now descended from near their kidneys through the groin and into the scrotum.",
        "Their little lungs are not quite mature enough to support them in the outside world at this stage, and their brain is changing appearance wise, taking on the grooves and ridges that make it look the same as an adults'. These wrinkles will increase to provide more space for brain tissue to grow and develop.",
        "They'll also know when it is light and dark now, but still won't necessarily keep to a day or night time sleeping or moving about regime! With only a few weeks to go you have probably started to notice your baby has now settled in to a regular pattern of movement.",
        "Their skin is now soft and smooth as they continue to take on fat, gaining around half a pound per week. Their skin is a lot less transparent and more opaque as the fat continues to develop. Your baby is enjoying periods of rest and wriggles now – and while they doze, they will be having dreams! Really!",
        "Your baby's bones are also continuing to harden, except for those in their skull, which stay soft and pliable to enable baby's head to be born safely. Their immune system is fully developed with the antibodies they need for the outside world being passed from you to your little one in preparation for the birth.",
        "As they get bigger the movements feel different but they should still follow their usual pattern until the end. It isn't true that babies ‘slow down’ as labour approaches, but they have less space to move in. Your baby can hear you right now, so it’s a good idea to begin talking to your baby.",
        "Your baby looks much the same as a newborn now, although they will get a little bit heavier before they are born. They currently have close to 15% fat on their body, but this will be closer to 30% by the time they’re born in a few weeks’ time.",
        "You will still be feeling them moving about, but probably much lower down in your tummy. If you notice any prolonged lack of movement, do contact your midwife straight away, so she can make sure everything is as it should be.",
        "At birth, your baby’s head is the same size as their hips, abdomen and shoulders and will change shape through the first few weeks after the birth. Your baby’s lungs are more than likely capable of adjusting to life outside the womb. They will now also be in the ‘engaged’ position, head down, and ready to go",
        "Their organs are now all fully formed and ready for life outside their home for the past 9 months. They are most likely very low down in your tummy now, head engaged and just waiting for the release of the hormones which will get the contractions started to push them out!.",
        "How odd that any day now they will go from being tucked up in your tummy to being properly in your life? And what an amazing journey they (and you!) have been on since week one!",
        "Your baby’s vision at birth will have developed enough to see around 2.5cm so they won’t be able to see much of your face at birth, they will however be able to recognise the sound of your voice and your partner’s if you’ve been talking to them over the last few weeks of pregnancy.S"
      ],
      "es": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
        "Tu bebe esta midiendo alrededor de 30 cm y es del tamaño de un choclo. Pesa alrededor de 600 grs. Su cara esta completamente formada con pestañas, cejas y pelo. ",
        "25",
        "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"]
    }
  },
};

module.exports = {
  words: words
}