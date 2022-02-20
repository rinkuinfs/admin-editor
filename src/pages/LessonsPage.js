import React, { Component } from "react";
import DynamicTable from '@atlaskit/dynamic-table';
import MainSection from "../components/MainSection";
import ContentWrapper from "../components/ContentWrapper";
import PageTitle from "../components/PageTitle";
import { css, jsx } from '@emotion/core';
import PropTypes from "prop-types";

import { withRouter } from 'react-router';

class LessonPage extends Component {

  render() {

    const that = this;
    
    const createHead = (withWidth) => {
      return {
        cells: [
          {
            key: 'title',
            content: 'Title',
            isSortable: true,
            width: withWidth ? 25 : undefined,
          },
          {
            key: 'type',
            content: 'Lesson Type',
            shouldTruncate: true,
            isSortable: true,
            width: withWidth ? 15 : undefined,
          },
          {
            key: 'unit',
            content: 'Unit',
            isSortable: true,
            width: withWidth ? 25 : undefined,
          },
        ],
      };
    };
    
    const head = createHead(true);
    const data = {"page_details":{"total_record_count":8,"num_pages":1,"has_previous":false,"has_next":false,"has_other_pages":false,"next_page_number":1,"current_page_no":1,"previous_page_number":0,"start_index":1,"end_index":8},"records":[{"slug":"introduction-to-health-and-nutrition","created_at":"2021-12-12T17:53:57.746186Z","updated_at":"2022-01-20T14:12:49.691710Z","title":"Introduction To Health And Nutrition","lesson_type":"video","status":"published","content":{"video":"https://player.vimeo.com/video/507485468","rt_content":{}},"order":1,"unit":"introduction-to-health-and-nutrition"},{"slug":"introduction","created_at":"2022-01-04T09:49:53.822282Z","updated_at":"2022-01-20T14:12:49.698489Z","title":"Introduction","lesson_type":"text","status":"published","content":{"type":"doc","content":[{"type":"heading","attrs":{"level":2},"content":[{"text":"INTRODUCTION","type":"text"}]},{"type":"paragraph","content":[{"text":"Many wonder about physical health at some point in life. Unfortunately, over the past few years, the Health and Wellness Industry has mystified the concept of health. As if “healthy” people are subspecies of the human race. Everyone is curious to know what these healthy people do, what they eat, how they exercise, what their daily routine is like, what they apply to their skin, etc., etc.","type":"text"}]},{"type":"paragraph","content":[{"text":"By incorporating certain healthy behaviors such as physical activity, healthy eating, minimal alcohol consumption, and psychological interventions can help change a person’s health status.\"","type":"text"}]},{"type":"paragraph","content":[]}],"version":1},"order":2,"unit":"introduction-to-health-and-nutrition"},{"slug":"what-is-health","created_at":"2021-12-31T05:22:10.168989Z","updated_at":"2022-01-20T14:12:49.705478Z","title":"What is Health","lesson_type":"text","status":"published","content":{"type":"doc","content":[{"type":"heading","attrs":{"level":2},"content":[{"text":"What is Health?","type":"text"}]},{"type":"blockquote","content":[{"type":"paragraph","content":[{"text":"The World Health Organisation (WHO) describes health as “a state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity.” ","type":"text"}]}]},{"type":"paragraph","content":[{"text":"If a person has no illness and is in a good physical state but dealing with psychological disorders or is going through physical, emotional, or psychological strain then that person is not considered a healthy person.","type":"text"}]},{"type":"paragraph","content":[{"text":"Now, this is a highly simplified definition and doesn’t represent the concept of health entirely.","type":"text"}]},{"type":"paragraph","content":[{"text":"Health can be considered as the ability to adapt to physical, environmental, and social challenges. After all, isn’t it the adaptations that have helped humans evolve?","type":"text"}]},{"type":"paragraph","content":[{"text":"Even though we have progressed technologically to a great extent but ‘health’ has been compromised in the process.","type":"text"}]},{"type":"paragraph","content":[{"text":"While our ancestors may not have had the sharpest brain, they did have a much more active lifestyle, they used to move hundreds of kilometers to find food, water, and shelter.","type":"text"}]},{"type":"paragraph","content":[{"text":"Evolution changed everything, technological advances have put us in a state of no to very few activities to perform the same task. The modern man is smart, technologically adept, and knows much more than his forefathers, but is sadly confined to a screen. Health is compromised as a result of leading a stagnant lifestyle where one eats a lot and sits a lot more. All these changes have happened in a short period (i.e. decades, rather than centuries) and the human bodies have not had the time to adapt yet.","type":"text"}]},{"type":"paragraph","content":[{"text":"Evolutionary adaptations happen after thousands of years, but these technological advances came after the mid-1900s, so we didn’t get too much time to adapt, thus our body’s functions are still the same as our ancestors, but we have less physical work now.","type":"text"}]},{"type":"paragraph","content":[{"text":"Generally speaking, a healthy person has well-functioning internal systems. The indications of the same are shared in figure 2. Review the list and identify if one can be called ‘healthy’.","type":"text"}]},{"type":"paragraph","content":[{"text":"It is important to note that just ‘looking’ healthy need not make a person healthy. Health must always be looked at holistically.","type":"text"}]},{"type":"paragraph","content":[{"text":"Now, an important question arises - Are health and fitness the same thing?","type":"text"}]},{"type":"paragraph","content":[{"text":"The answer is NO.","type":"text"}]}],"version":1},"order":3,"unit":"introduction-to-health-and-nutrition"},{"slug":"what-is-nutrition","created_at":"2022-01-04T08:56:20.772099Z","updated_at":"2022-01-20T14:12:49.712803Z","title":"What is Nutrition?","lesson_type":"text","status":"published","content":{"type":"doc","content":[{"type":"heading","attrs":{"level":2},"content":[{"text":"What is Nutrition?","type":"text"}]},{"type":"paragraph","content":[{"text":"Here are two statements.","type":"text"}]},{"type":"paragraph","content":[{"text":"Statement A - Nutrition is the food we eat.","type":"text"}]},{"type":"paragraph","content":[{"text":"Statement B - Nutrition is how food affects us.","type":"text"}]},{"type":"paragraph","content":[{"text":"So, what exactly is Nutrition?","type":"text"}]},{"type":"paragraph","content":[{"text":"While most think Option A is true and don’t consider option B, let it be clear that Nutrition includes BOTH of these. If everyone begins to recognize that what is eaten matters as much as how it affects the body, everyone will live healthier lives.","type":"text"}]},{"type":"paragraph","content":[{"text":"“Small chemical components of food that are needed in adequate amounts by the body to grow, reproduce and lead a normal healthy life are nutrients.”","type":"text"}]},{"type":"paragraph","content":[{"text":"Everything that is consumed consists of nutrients. Broadly speaking, there are 3 types of nutrients;","type":"text"}]},{"type":"orderedList","content":[{"type":"listItem","content":[{"type":"paragraph","content":[{"text":"Macronutrients - Proteins, Fats, and Carbohydrates","type":"text"}]}]},{"type":"listItem","content":[{"type":"paragraph","content":[{"text":"Micronutrients - Vitamins and Minerals","type":"text"}]}]},{"type":"listItem","content":[{"type":"paragraph","content":[{"text":"Inorganic Nutrients - Water and Oxygen","type":"text"}]}]}]},{"type":"paragraph","content":[{"text":" ","type":"text"}]},{"type":"paragraph","content":[{"text":"All of these nutrients have a definite role and are obtained from different food sources.","type":"text"}]},{"type":"paragraph","content":[{"text":"The health of the individual is influenced by the utilization of nutrients is called the nutritional status of an individual. The nutritional status can be determined through medical checkups, by the process of collecting and interpreting dietary and medical history. The nutritional status of a person can be good, fair, or poor. ","type":"text"}]},{"type":"paragraph","content":[{"text":"Nutritional assessment aids in identifying under-nutrition, overnutrition (more on this in a while), nutritional deficiencies, individuals at the risk of developing malnutrition, individuals at the risk of developing nutritionally related diseases, the resources available to assist them to overcome nutritional problems.","type":"text"}]},{"type":"paragraph","content":[{"text":"Curiosity about nutrition is not a new phenomenon. Scientists have been studying food and nutrition for centuries. However, the landscape of Modern Nutrition has developed in recent years. During the initial years of the 20th Century, the discovery, isolation, and synthesis of micronutrients were performed. The goal was to study diseases of deficiency.","type":"text"}]},{"type":"paragraph","content":[{"text":"With this, the advent of nutrition science began to take shape. It is not shocking to learn that widespread diseases were a starting point of most nutrition-centered research. More research was conducted about non-communicable diseases and how nutrition plays a role in them. Over the years, nutrition scientists realized that it is not nutrients in isolation that need to be studied, it is food and diet patterns in general. This is because silent epidemics such as malnutrition, obesity, and other food-related lifestyle diseases becoming more and more common.","type":"text"}]},{"type":"paragraph","content":[{"text":"Since the 1990s, the emphasis has been placed on scientific, evidence-based research. Therefore, a lot more large-scale nutrition studies, randomized clinical trials, cohort studies, etc. are seen. But the reality is, despite progress across all spheres in lives, diet and food patterns are still driven by primal urges and needs.","type":"text"}]},{"type":"paragraph","content":[{"text":"Every generation comes with its own set of health hazards. While human ancestors struggled to live longer, today, people are living longer but are crippled by lifestyle disorders. What does this mean?","type":"text"}]},{"type":"paragraph","content":[{"text":"It means that the ‘one size fits all approach does not work when it comes to nutrition. It needs to be tweaked to the needs of the present situation and should be made sustainable. And of course, it should keep the diseases at bay.","type":"text"}]},{"type":"heading","attrs":{"level":3},"content":[{"text":"What is Optimum Nutrition?","type":"text"}]},{"type":"paragraph","content":[{"text":"When the food provides the right amount of nutrients, the diet can be sustained for a long time, and it is safe to say that the nutrition is optimum when one is reasonably healthy. However, it is important to note that optimum nutrition depends entirely on the goal.","type":"text"}]},{"type":"paragraph","content":[{"text":"Now, think about the grade 1 or grade 2 textbooks. Remember that chapter on food groups and a balanced diet?","type":"text"}]},{"type":"paragraph","content":[{"text":"Remember seeing something like this? Okay, now what if one was told that this is not exactly optimal?","type":"text"}]},{"type":"paragraph","content":[{"text":"A balanced diet will make sure that one gets the right amount of macronutrients as per individuals goals. What may be a balanced and optimal diet for one person may be counterproductive for another. This is why we must stop asking others for a diet plan.","type":"text"}]},{"type":"paragraph","content":[{"text":"Imagine planning a holiday. Now, there are many things to consider like:","type":"text"}]},{"type":"orderedList","content":[{"type":"listItem","content":[{"type":"paragraph","content":[{"text":"What is the purpose of the holiday- Leisure/ Business","type":"text"}]}]},{"type":"listItem","content":[{"type":"paragraph","content":[{"text":"What kind of destination suits most of the plans?","type":"text"}]}]},{"type":"listItem","content":[{"type":"paragraph","content":[{"text":"How much money can be spent?","type":"text"}]}]}]},{"type":"paragraph","content":[{"text":"Now think about this - if so much thought can be put into a holiday, why not put some more thought into daily nutrition?","type":"text"}]},{"type":"heading","attrs":{"level":3},"content":[{"text":"Why do we need to know about Nutrition?","type":"text","marks":[{"type":"strong"}]}]},{"type":"paragraph","content":[{"text":"Nutrients are essential elements required for the normal functioning of our body and when taken in excess, or deficiency can result in different physiological and psychological conditions.","type":"text"}]},{"type":"paragraph","content":[{"text":"Types of Nutrition:","type":"text"}]},{"type":"paragraph","content":[{"text":"Good nutrition: “Good nutrition is the state in which a person gets all the nutrients in the correct amount and proportion and some nutrients are stored in the body after meeting all the body requirements”. This is known as optimum or adequate nutrition and it helps to maintain good health.","type":"text"}]},{"type":"paragraph","content":[{"text":"Malnutrition: Malnutrition means an undesirable quantity and kind of nutrition.","type":"text"}]},{"type":"paragraph","content":[{"text":"Malnutrition is that state of ill-health which may be caused by the deficiency or excess of one or more essential nutrients in the body. An unhealthy environment also causes malnutrition. The physical, mental, and intellectual well-being of a person is affected due to malnourishment.","type":"text"}]},{"type":"paragraph","content":[{"text":"A malnourished person is physically, mentally, socially, and emotionally sick is of two types:","type":"text"}]},{"type":"orderedList","content":[{"type":"listItem","content":[{"type":"paragraph","content":[{"text":"Undernutrition","type":"text","marks":[{"type":"strong"}]},{"text":" - Undernutrition is a deficiency of one or more nutrients, and in that state of nutrition in which the quality and quantity of food is not sufficient for the body and is deficient in one or more nutrients. An undernourished person manifests symptoms of deficiencies and feels unwell. Poor body weight, poor resistance to infection, weakness, and general ill-health are the symptoms of undernourishment.","type":"text"}]}]},{"type":"listItem","content":[{"type":"paragraph","content":[{"text":"Overnutrition","type":"text","marks":[{"type":"strong"}]},{"text":" - Overnutrition is an excess of one or more nutrients and is a state of nutrition in which the intake of nutrients is more than what the body needs quantitatively as well as qualitatively causing adverse effects on the body.","type":"text"}]}]}]},{"type":"paragraph","content":[{"text":"A person does not associate someone who weighs 100 kg with the word - MALNOURISHED. ","type":"text"}]},{"type":"panel","attrs":{"panelType":"info"},"content":[{"type":"paragraph","content":[{"text":"However, ","type":"text"},{"text":"even those with obesity can be malnourished ","type":"text","marks":[{"type":"strong"}]},{"text":"(Via 2012; C. Fu et al, 2016).","type":"text"}]}]},{"type":"paragraph","content":[{"text":"Shocking, right? Research suggests that nutritional deficiencies are more likely to get overlooked in people who are obese (Lasocki, 2015). The reason may be that obese or overweight people get more than enough calories, however not enough micronutrients. Hence, poor food choices can provide ample calories but not the right nutrition.","type":"text"}]},{"type":"paragraph","content":[{"text":"WHO recognizes malnutrition, in every form, as a significant threat to human health. Humans are today living with the double burden of malnutrition in the form of undernutrition and being overweight.","type":"text"}]},{"type":"paragraph","content":[{"text":"So whether someone is lean or overweight, nutrition knowledge is important for anyone and everyone.","type":"text"}]}],"version":1},"order":4,"unit":"introduction-to-health-and-nutrition"},{"slug":"what-is-fitness","created_at":"2022-01-04T08:55:30.500369Z","updated_at":"2022-01-20T14:12:49.721870Z","title":"What is Fitness","lesson_type":"text","status":"published","content":{"type":"doc","content":[{"type":"heading","attrs":{"level":2},"content":[{"text":"What is Fitness?","type":"text"}]},{"type":"blockquote","content":[{"type":"paragraph","content":[{"text":"Physical fitness is just a leaf of a tree known as Health and can be defined as the physical ability to perform and enjoy daily activities with ease","type":"text","marks":[{"type":"strong"}]},{"text":".","type":"text"}]}]},{"type":"paragraph","content":[{"text":"Physical fitness can be achieved by regularly engaging in moderate-intensity physical exercise, proper nutrition, and taking sufficient rest (Tremblay et al, 2010).","type":"text"}]},{"type":"paragraph","content":[{"text":"A lot of people use the word, getting ‘fit’ and getting ‘healthy’ interchangeably. A person can be fit, and not very healthy, and vice-versa. The best way to understand this is to balance both, health and fitness, sides.","type":"text"}]},{"type":"paragraph","content":[{"text":"American nutritionist Victor Lindlahr quoted the line “you are what you eat” in 1930, which means nutrition is the string that ties Health and Fitness together.","type":"text"}]}],"version":1},"order":5,"unit":"introduction-to-health-and-nutrition"},{"slug":"therapeutic-nutrition","created_at":"2022-01-04T09:22:08.245771Z","updated_at":"2022-01-20T14:12:49.729079Z","title":"Therapeutic Nutrition","lesson_type":"text","status":"published","content":{"type":"doc","content":[{"type":"heading","attrs":{"level":2},"content":[{"text":"Therapeutic Nutrition or Diet Therapy","type":"text"}]},{"type":"paragraph","content":[{"text":"As one may have figured out by now, proper nutrition is the key to health and to keep diseases at bay. However, another fascinating aspect of nutrition is that by making changes in nutrition and diet, certain diseases can be prevented, cured, or managed.","type":"text"}]},{"type":"heading","attrs":{"level":3},"content":[{"text":"Professionals in this field:","type":"text"}]},{"type":"paragraph","content":[{"text":"Dietitians ","type":"text","marks":[{"type":"strong"}]},{"text":"are the only qualified professionals who can work with both healthy individuals and those having some medical issues. They can evaluate, diagnose and treat medical conditions such as diabetes, high cholesterol, etc. Dietitians use the most recent scientific evidence on nutrition to help people make healthier lifestyles and dietary changes.","type":"text"}]},{"type":"paragraph","content":[{"text":"Nutritionists, ","type":"text","marks":[{"type":"strong"}]},{"text":"on the other hand","type":"text"},{"text":", ","type":"text","marks":[{"type":"strong"}]},{"text":"are only able to provide information about food and diet. Some nutritionists work under the supervision of a dietitian, and in this instance, they may advise on specific medical conditions. ","type":"text"}]},{"type":"paragraph","content":[{"text":"Nutritional therapists","type":"text","marks":[{"type":"strong"}]},{"text":" make recommendations for a diet to improve or prevent illnesses, often based on little scientific evidence. They use nutritional supplementation as natural medicine. These are not recognized as valid treatments in conventional medicine. Their advice is often based on personal opinions or beliefs.","type":"text"}]},{"type":"heading","attrs":{"level":3},"content":[{"text":"Interventions made by these professionals:","type":"text"}]},{"type":"paragraph","content":[{"text":"A therapeutic diet","type":"text","marks":[{"type":"strong"}]},{"text":" is planned to meet the nutrient needs of a normal person as the aim of diet therapy is to maintain health and help the patient to regain nutritional wellbeing. All therapeutic diets are modifications of the normal diet made to meet the altered needs resulting from disease.","type":"text"}]},{"type":"paragraph","content":[{"text":"Diet Therapy","type":"text","marks":[{"type":"strong"}]},{"text":" is the use of appropriate nutrient-dense foods as a tool in the recovery from illness. In most illnesses, the patient’s diet complements the medical or surgical treatment. The rate of recovery is determined by the patient’s acceptance and intake of the diet prescribed. A modified diet is most important for recovery in certain ailments such as obesity and diabetes mellitus.","type":"text"}]},{"type":"paragraph","content":[{"text":"The main aim is to prevent malnutrition or stop it from happening in the 1st place.","type":"text"}]},{"type":"panel","attrs":{"panelType":"info"},"content":[{"type":"paragraph","content":[{"text":"Unlike 'nutritionist' and 'nutritional therapist', 'dietitian' is a protected title and only someone with the correct training and registration can practice as one.","type":"text","marks":[{"type":"strong"}]}]}]},{"type":"paragraph","content":[{"text":"As someone who is already curious about nutrition, it is exciting to find that there are innumerable career opportunities for nutrition professionals today. With health being the buzzword (for years and for ages to come), this field will only grow. However, it is advisable that to be a professional nutritionist, one must take stock of oneself. It is essential to apply this knowledge to one’s life before spreading it. After all, if a person is convinced about something first, only then can the information be conveyed better to others.","type":"text"}]}],"version":1},"order":6,"unit":"introduction-to-health-and-nutrition"},{"slug":"dietetics","created_at":"2022-01-04T09:19:07.272907Z","updated_at":"2022-01-20T14:12:49.737150Z","title":"Dietetics","lesson_type":"text","status":"published","content":{"type":"doc","content":[{"type":"heading","attrs":{"level":2},"content":[{"text":"Dietetics","type":"text"}]},{"type":"paragraph","content":[{"text":"Dietetics is the study of diet and general nutrition. Initially established to corroborate public health workers and to aid in public health policy, dietetics aims to educate people about healthy eating and nutrition. It is a science that studies the effect food has on overall health and well-being.","type":"text"}]},{"type":"paragraph","content":[{"text":"Dietitians and nutritionists study dietetics. They can work in offices, public health departments, hospitals, schools, and even as entrepreneurs. Dietetics can also be pursued for a niche population suffering from certain specific conditions.","type":"text"}]}],"version":1},"order":7,"unit":"introduction-to-health-and-nutrition"},{"slug":"references","created_at":"2022-01-04T09:51:33.326534Z","updated_at":"2022-01-20T14:12:49.744236Z","title":"References","lesson_type":"text","status":"published","content":{"type":"doc","content":[{"type":"heading","attrs":{"level":2},"content":[{"text":"References","type":"text"}]},{"type":"paragraph","content":[{"text":"C. Fu Michael, D'Ambrosia Christopher, et al. Malnutrition Increases With Obesity and Is a Stronger Independent Risk Factor for Postoperative Complications: A Propensity-Adjusted Analysis of Total Hip Arthroplasty Patients. The Journal of Arthroplasty. Vol 31(11), 2016, 2415-2421","type":"text"}]},{"type":"paragraph","content":[{"text":"Lasocki, Sigismond MD, Ph.D., The True Obesity Paradox, Critical Care Medicine: January 2015 - Volume 43 - Issue 1 - p 240-241","type":"text"}]},{"type":"paragraph","content":[{"text":"Mozaffarian, Dariush & Rosenberg, Irwin & Uauy, Ricardo. (2018). History of modern nutrition science—implications for current research, dietary guidelines, and food policy. BMJ. 361. k2392.","type":"text"}]},{"type":"paragraph","content":[{"text":"Tremblay MS, Colley RC, Saunders TJ, Healy GN, Owen N (December 2010). \"Physiological and health implications of a sedentary lifestyle\". ","type":"text"},{"text":"Applied Physiology, Nutrition, and Metabolism","type":"text","marks":[{"type":"em"}]},{"text":". ","type":"text"},{"text":"35","type":"text","marks":[{"type":"strong"}]},{"text":" (6): 725–40","type":"text"}]},{"type":"paragraph","content":[{"text":"Via, Michael \"The Malnutrition of Obesity: Micronutrient Deficiencies That Promote Diabetes\", ","type":"text"},{"text":"International Scholarly Research Notices","type":"text","marks":[{"type":"em"}]},{"text":", vol. 2012, Article ID 103472, 8pages, 2012 ","type":"text"}]}],"version":1},"order":8,"unit":"introduction-to-health-and-nutrition"}]}
    const records = data.records;
    function createKey(input) {
      return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
    }

    const nameWrapperStyles = css({
      display: 'flex',
      alignItems: 'center',
    });
    
    const NameWrapper = ({ children }) => (
      <span css={nameWrapperStyles}>{children}</span>
    );
  
    const rows = records.map((record, index) => ({
      key: `row-${index}-${record.title}`,
      cells: [
        {
          key: createKey(record.title),
          content: (
            <NameWrapper>
              <a href="#" 
              onClick={(event) =>{
                event.stopPropagation();
                event.preventDefault();
                that.props.router.push({pathname: `lessons/${record.slug}/edit`, state: record});
              }}
              >
                {record.title
              }</a>
            </NameWrapper>
          ),
        },
        {
          key: createKey(record.lesson_type),
          content: record.lesson_type,
        }
        ,
        {
          key: createKey(record.unit),
          content: record.unit,
        }
      ],
    }));
    const recordLabels =  Object.keys(records[0]);
    console.log(recordLabels);
    return (
      <ContentWrapper>
        <PageTitle>Lessons</PageTitle>
        <DynamicTable
          head={head}
          rows={rows}
          rowsPerPage={5}
          defaultPage={1}
          loadingSpinnerSize="large"
          isRankable
        />
      </ContentWrapper>
    );
  }
}

export default withRouter(LessonPage);