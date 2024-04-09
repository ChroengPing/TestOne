import React from "react";
import "./About.css";
import about from "../../Picture/about1.jpg";
import logo from "../../Picture/Logo stem png.png";

import { GiBeveledStar   } from "react-icons/gi";
function About() {
  return (
    <div>
      <div className="control_about">
        <div className="description_picuter">
          <img src={about} alt="" />
        </div>
        <div className="tittle_about center">
          <h4>Our Mission</h4>
        </div>
        <div className="component_about">
          <div className="picturAbout">
            <img src={logo} alt="" />
          </div>
          <div className="picturAbout">
            <h4>
              <span>
                ចក្ខុវិស័យ៖
                <p>
                  ធ្វើឪ្យមានការអប់រំស្ទែមមានភាពទាក់ទាញ
                  និងចូលរួមពីសិស្សគ្រប់ស្រទាប់វណ្ណៈ
                  ដូច្នេះពួកគេអាចមើលឃើញថាខ្លួនឯងថានឹងក្លាយជាអ្នកជំនាញស្ទែមនាពេលអនាគត
                  ។
                </p>
              </span>
              <span>
                បេសកកម្ម៖
                <p>
                  <GiBeveledStar  className="handPoint"/>
                  ផ្ដល់ឪ្យសិស្សានុសិស្សគ្រប់រូបនូវ ការអប់រំស្ទែម យ៉ាងម៉ត់ចត់និងដោយមានការចូលរួមដើម្បីរៀបចំពួកគេសម្រាប់ភាពជោគជ័យទាំងនៅកម្រិតមហាវិទ្យាល័យ
                  អាជីព​ និងជីវិត ។
                </p>
                <p>
                  <GiBeveledStar  className="handPoint"/>
                  បំផុសគំនិតឪ្យសិស្សស្វែងយល់ពីចំណាប់អារម្មណ៍របស់ខ្លួននៅក្នុងការសិក្សាស្ទែមនិងដើម្បីអភិវឌ្ឍជំនាញដំណោះស្រាយបញ្ហាការត្រិះរិះពិចារណាស៊ីជម្រៅ
                  និងជំនាញច្នៃប្រឌិតថ្មី ។
                </p>
                <p>
                  <GiBeveledStar  className="handPoint"/>
                  បង្កើតបរិយាកាសប្រកបទៅដោយបរិយាប័ន្ទក្នុងការអប់រំស្ទែមដែលធ្វើឪ្យសិស្សទាំងអស់មានអារម្មណ៍ថាត្រូវពួកគេ ត្រូវបានស្វាគមន៍និងផ្ដល់តម្លៃ ដោយគ្មានលក្ខខណ្ឌ​ ។
                </p>
                <p>
                  <GiBeveledStar  className="handPoint"/>
                  ​​​​​​សហករដែគូជាមួយនិងរដ្ឋាភិបាល អង្គការ វិស័យឯកជន និងសហគមន៍
                  ដើម្បីផ្ដល់ឪ្យសិស្សទទួលបាននូវបទពិសោធន៍ស្ទែមពីពិភពលោកជាក់ស្ដែង
                  ។
                </p>
              </span>
              <span>
                ទស្សនៈវិទ្យា៖
                <p>
                  <GiBeveledStar  className="handPoint"/>ផ្ដល់ការអប់រំប្រកបដោយគុណភាព
                </p>
                <p>
                  <GiBeveledStar  className="handPoint"/>សិស្សមានឧត្ដមភាពក្នុងវិជ្ជាជីវៈស្ទែម
                </p>
                <p>
                  <GiBeveledStar  className="handPoint"/>សិស្សមានជំនាញក្នុងដោះស្រាយបញ្ហាជាក់ស្ដែង 
                </p>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
