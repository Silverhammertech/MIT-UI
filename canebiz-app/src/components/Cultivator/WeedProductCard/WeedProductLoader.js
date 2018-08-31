import axios from '../../../axios-weedprod';



loadWeedProductFirebase = () => {
    let id = 0;
    const weedproduct = {
            id: id+1,
            imgurl: '../../../../../public/assets/white=rhino.jpg',
            name: 'White Rhino: Indica 90 / Sativa 10',
            intro: 'White Rhino is a strong, fast-growing, near-pure indica strain with ancestry in the same lineage as her more famous relative, White Widow.  As the name suggests, this plant is tough and sturdy, with a thick skin for high temperatures as well as cold nights. This strain delivers a knockout, medicinal-grade indica stone.',
            para1: 'White Rhino adapts well to any environment, and is known for her massive yields, especially in hydro grows. Green House recommends starting her with a medium-low pH (5.7 hydro / 5.8 soil) that is slowly increased until it reaches 6.5 at the end of flowering. EC levels should be kept under 2.4 in hydro and 2.0 in soil. Plants ripen in 9 weeks, or early October. To really see the rhino’s “white”, let her ripen one extra week.',
            para2: 'While these plants flourish in SOG or SCROG systems, they can also be grown in larger containers and allowed to vegetate into bushes. The White Rhino plant has a typical short squat stature, with short, thick branches and extremely compact internodes. She is a smart choice for indoor gardeners with space limitations, or indoor growers looking for a shorter plant. Plants grown in 5-gallon containers will finish at 4-5 feet if allowed to grow vegetatively for at least two weeks. With less veg time, or in small conatiners, plants stay at about 3 feet tall. Even plants with no root limitations finish no taller than 6 feet. When White Rhino is allowed to grow big, pruning is necessary to allow light and air to penetrate the inner and lower areas of the plant.',
            para3: 'The leaves on White Rhino are huge, full, and midnight green, and her stalks are very thick. her calyxes are small, round and super dense, forming rock hard colas. While not terrible odiferous while growing, the White Rhino harvest will have a pleasantly sweet smell. The toke is also sweetened with indica berry flavor, followed by a sharp aftertaste and sometimes about of coughing. White Rhino delivers a full-throttle indica stone. The buzz goes straight to the body, giving a rubbery, relaxed feeling that is nearly narcotic. It is a down-tempo smoke that endures, ideal for slow-paced recreation. White Rhino is prized in the medical community for effective relief of chronic pain.'
    }
    axios.post('/weedproduct.json');

}