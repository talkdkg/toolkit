'use strict';

angular.module('anywhereApp')
    .controller('MainCtrl', function ($scope, $window) {

      $scope.toggleMainNav = function () {
        $scope.animate = true;
        $scope.slideIn = !$scope.slideIn;
        console.log('slideIn ' + $scope.slideIn);
      }

      function resetMainNav() {
        $scope.slideIn = false;
        // remove class animate to prevent the main nav open again when open a page
        $scope.animate = false;
      }

      // main nav links
      $scope.links =
          [
            {url: '#/', title: 'Home'},
            {url: '#/podcasts', title: 'Podcasts'},
            {url: '#/videos', title: 'Videos'},
            {url: '#/pressReleases', title: 'Press releases'}
            //{url:'#', title:' ##Iusto praesent voluptatibus et his, in debet minimum qui. Mel scripta vituperatoribus et, vel everti molestiae eu.     Ei quo quidam partiendo tincidunt, eam inani omnes ex. Nam ignota feugiat vocibus ei, nec ei fabulas nusquam     recteque. Mea oblique epicurei intellegam te, quod pericula consectetuer ne mea. Ut autem graeci platonem vix, ne     qui oblique scaevola.      Quem saepe oratio ut vim, consul omnesque suavitate nam ne. Mel id suas omittam, ut cum volumus posidonium. Usu ex     nobis graece, oratio interesset cum ad. Virtute tibique tacimates mel an. Ei mei detraxit pertinacia, eu cotidieque     eloquentiam per, suas wisi ea mel. Ponderum dignissim mnesarchum nam te.      Mel ei movet veniam. Dolorum accusamus imperdiet ne cum. Vide illum constituto ei est, natum nullam mnesarchum sea     ut. Equidem vocibus repudiare in usu, eam no munere eleifend inciderint, ei solet malorum eam. His natum veritus     alienum an, munere theophrastus nam no.      Noster aliquam et per, ex error iudicabit efficiantur sed. Ut qui dolores probatus, at odio prompta perpetua sea, ne     hinc duis autem sea. Id possim suscipit moderatius qui, ad scripta labitur nec. Volumus invidunt ea qui, id has amet     eirmod.      Erant epicurei sit ea, vim cu error accommodare. Vix ei erat mundi volumus, ne cum exerci placerat adversarium,     accusata maluisset quo te. No qui soleat repudiandae, ne habeo postea nominati usu. Hendrerit dissentiet ea ius, usu     quodsi dolorem percipit ne. Quo te atqui cetero. Ne est diam facilisi, legimus patrioque expetendis usu id.      Pri audire adversarium instructior at, ei mel imperdiet instructior. Ex sea electram rationibus. Ne eum magna vocent     definiebas, alii sint mentitum te nec. At pro autem definiebas, no essent audire has. Quod suavitate ullamcorper duo     in, ne nec dictas detracto theophrastus, ea ferri placerat intellegat eam.      Dicat movet ea cum, timeam oblique disputando mei ut, fugit dicit partem ne duo. Vix ad vero efficiendi, duo cu     iudico praesent, vel viris facilis epicurei id. Viris homero persequeris ex nam. Ex mea atqui lobortis adolescens,     pro ornatus graecis offendit an. Sed ex summo probatus, unum dolorum mei eu. Ei quod scriptorem duo, cu nobis     posidonium cotidieque usu.      Et nec tempor meliore dignissim. His quas civibus ad, nam purto molestiae necessitatibus cu, dolore dicunt nec an.     Vide graecis ius at. Ut quo autem porro malorum, vis an minim aperiam antiopam. Eum ea vidisse eripuit suscipiantur.     Posse eirmod qualisque per id, munere sadipscing ei usu.      Vim at movet voluptua phaedrum. Id eum dicat tation molestie. Nam recusabo petentium et, natum corpora vivendum ut     vis. Ferri imperdiet torquatos ad mea, ne duo quodsi mandamus.      Ne cotidieque suscipiantur deterruisset quo, quo an alii abhorreant. Ad detracto suavitate sit, eu illud homero     aperiam sea, pri sint debet verterem ut. Augue possit delicatissimi duo no, ut ubique virtute mel. Eam nihil     consetetur et, suavitate incorrupte no mel. Timeam graecis apeirian usu eu, prompta nostrum appetere ex eum, libris     detracto albucius ea vim.      Est cu exerci lucilius sapientem. Iudico interesset mel eu, atomorum laboramus nam at. Eam lobortis eloquentiam ad,     choro suavitate efficiendi ei eam. Probo magna aliquam eu nam, te his quando prompta forensibus, eos et democritum     scriptorem necessitatibus. Sed illud iriure officiis id, meis libris feugiat in nam. Altera admodum phaedrum ea vix,     qui timeam alterum erroribus ea, his te dicat aperiri.      Has alterum detraxit vulputate at, an duo dolorum pertinax eleifend. Nam mediocrem repudiandae ea, et sea esse     nihil. Pericula vituperatoribus per an. Per et verear corpora expetendis, modus corpora nec cu.      Temporibus dissentiet eam ne. Ut eligendi appareat pri, sanctus accumsan placerat ei sit. Ex nam vero nominati     elaboraret, mea integre suscipit eu. Mel bonorum offendit signiferumque id, has menandri euripidis ut. An duo meis     liber, cu duo meis nobis cetero.      Pri at nostrud offendit, omittam deleniti id nec. Porro tacimates perpetua sed in. Tantas fastidii principes ea vel,     te splendide constituam persequeris sed, vis ei quot perfecto pericula. Eos cu reprimique dissentiet. Duis placerat     no nam, porro persius percipitur qui ad. Quo et erat velit option, eirmod principes et vim, lorem tritani inciderint     at vis.      Ad eos ipsum persius ancillae. Eirmod albucius his an, ea has agam voluptatibus. Ei vidit officiis vel, at vel     appareat detraxit. Mel in civibus blandit liberavisse.      Prima posidonium nam ea, duo ad rationibus comprehensam, his solum praesent cu. Eu oblique volutpat nec, ad aeterno     scaevola vis. Id est gloriatur constituto, te quo facer adversarium, ne usu invidunt suavitate. Malis consetetur mea     an, pri veri clita te. At vim munere libris debitis. Ei nisl illum eligendi per, ius ponderum pericula     vituperatoribus ex, sit vivendo offendit evertitur te.##'}
          ];

      // hide the main nav
      $scope.hideMainNav = resetMainNav;

      // go back in history
      $scope.goBack = function () {
        resetMainNav();
        $window.history.back();
      }


    });
