/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "ANALYZING SCHOOL REVIEWS -  MIT Center for Constructive Communication",
    authors:
      "Nabeel Gillani, Vatsal Verma, Xiaoji Xu, Deb Toy",
    conferences:
      "MIT Research Expo 2021",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/mit.png",
    citation: {
      vancouver:
        "Gillani, N., Chu, E., Beeferman, D.,Verma, V., Eynon, R., & Roy, D. (2021). Parents’ Online School Reviews Reflect Several Racial and Socioeconomic Disparities in K–12 Education. AERA Open, 7",
    },
    abstract:
      "Parents often select schools by relying on subjective assessments of quality made by other parents, which are increasingly becoming available through written reviews on school ratings websites. To identify relationships between review content and school quality, we apply recent advances in natural language processing to nearly half a million parent reviews posted for more than 50,000 publicly funded U.S. K–12 schools on a popular ratings website. We find: (1) schools in urban areas and those serving affluent families are more likely to receive reviews, (2) review language correlates with standardized test scores—which generally track race and family income—but not school effectiveness, measured by how much students improve in their test scores over time, and (3) the linguistics of reviews reveal several racial and income-based disparities in K–12 education. These findings suggest that parents who reference school reviews may be accessing, and making decisions based on, biased perspectives that reinforce achievement gaps.",
    absbox: "absPopup1",
  },

  {
    title: "Dence Caption Imagining",
    authors:
      "V Verma, D Khanna, S Alhawat",
    conferences:
      "The 27th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/dense.png",
    citation: {
      vancouver:
        "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      " My team and I explored several architectures to perform image generation conditioned on a text description. • We used the COCO and California- UCSD Birds 200 dataset for this task. We used the StackGAN architectureas a baseline. Our work consisted of result replication together with the implementation of Laplacian Pyramid upsampling and attention mechanisms to obtain around 10% improvement on our selected baseline. • This work is currently under review at the IJSR 2022.",
    absbox: "absPopup2",
  },

  {
    title:
      "Machine Vision for Intelligent Vehicles in India",
    authors: "Verma, V., Ahlawat, S., Khanna, D. (2022)",
    conferences:
      "Proceedings of International Conference on Recent Trends in Computing . Lecture Notes in Networks and Systems, vol 341. Springer, Singapore",
    researchYr: 2022,
    citebox: "popup3",
    image: "assets/images/research-page/machine.png",
    citation: {
      vancouver:
        "Verma, V., Ahlawat, S., Khanna, D. (2022). Machine Vision for Intelligent Vehicles in India. In: Mahapatra, R.P., Peddoju, S.K., Roy, S., Parwekar, P., Goel, L. (eds) Proceedings of International Conference on Recent Trends in Computing . Lecture Notes in Networks and Systems, vol 341. Springer, Singapore. https://doi.org/10.1007/978-981-16-7118-0_64",
    },
    abstract:
      "This paper consists of a cross-examination on previous exploration done on machine vision for intelligent vehicles with respect to our new technical ideas which can be implemented for the betterment in intelligent vehicles. We have stated about various technical advancements in machine vision in the past few decades in various parts of world which can be considered in India. We have proposed a model with the advancement of autonomous vehicles which can be productive for use in India. We stated the current environmental conditions which impacts vehicle and its performance. Depth and optical flow has been acknowledged in the vision algorithms, which is used for betterment in image processing with minimal computation power and special instruments/hardware in the autonomous vehicles for efficiency. We demonstrated routine tasks, mapping and localization processes, which play an important role for detection of objects. Map data often influences high-profile verdicts of intelligent vehicles for better accuracy in meters. The results seem to be promising, showing that the machine vision system is useful in enhancing the vision algorithms, and the proposed ideas are robust for acknowledgment of complex road environments conditions in India. Hereafter, challenges of the machine vision in intelligent vehicles are also conferred.",
    absbox: "absPopup3",
  },

  // {
  //   title:
  //     "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
  //   authors:
  //     "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup4",
  //   image: "assets/images/research-page/dialogueState.png",
  //   citation: {
  //     vancouver:
  //       "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 4",
  //   absbox: "absPopup4",
  // },

  // {
  //   title: "Dual Super-Resolution Learning for Semantic Segmentation",
  //   authors: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup5",
  //   image: "assets/images/research-page/semanticSegmentation.png",
  //   citation: {
  //     vancouver:
  //       "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 5",
  //   absbox: "absPopup5",
  // },

  // {
  //   title: "Deep Unfolding Network for Image Super-Resolution",
  //   authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup6",
  //   image: "assets/images/research-page/deepNetwork.png",
  //   citation: {
  //     vancouver:
  //       "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 6",
  //   absbox: "absPopup6",
  // },

  // {
  //   title:
  //     "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
  //   authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup7",
  //   image: "assets/images/research-page/imageDecomposition.png",
  //   citation: {
  //     vancouver:
  //       "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 7",
  //   absbox: "absPopup7",
  // },
  // {
  //   title:
  //     "Forward and Backward Information Retention for Accurate Binary Neural Networks",
  //   authors:
  //     "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup8",
  //   image: "assets/images/research-page/neuralNetworks.jpg",
  //   citation: {
  //     vancouver:
  //       "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 8",
  //   absbox: "absPopup8",
  // },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
