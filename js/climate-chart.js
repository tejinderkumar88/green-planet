

var flag; 
var modal = "<h2>Frequently Asked Questions</h2><hr size=1><div style='text-align:left;'>Coming soon.  In the meantime, please check out this information below.<div style='text-align:left;padding-top:20px;'><ul><li><a href=http://www.methanelevels.org/#sources>Data source information</a></li><li><a href=https://www.epa.gov/ghgemissions/overview-greenhouse-gases>Learn more about Methane emissions</a></li><li><a href=https://www.youtube.com/watch?v=oHzADl-XID8>How is greenhouse gas data extracted from ice cores? (Video)</a></li></ul></div>";
//  get variable theme 
var theme = "";
// tag <image> tofront 
	if(theme == 'dark-unica'){
		themenum = 4;
	}else if(theme == 'grid-light'){
		themenum = 3;
	}else if(theme == 'sand-signika'){
		themenum = 3;
	}else{
		themenum = 4;
	}
	
var img = "graph_grid";
	
var pid = "2degreesinstitute";
var ht_modal;
var ht_faq_content_ch4 = '';
    ht_faq_content_ch4=ht_faq_content_ch4+ modal;
var ht_data_source_ch4="http://www.methanelevels.org/#sources"; 
var ht_dashboard="https://www.climatelevels.org/?pid=2degreesinstitute&theme=grid-light";  
var ht_modal_content_ch4="<h3 style='cursor:pointer;'>Embed this interactive graph on your website.</h3><div style='text-align:center;border-width:1px 0px 1px 0px;border-style:solid;border-color:silver;padding:20px 0px 20px 0px;'><center><img style='align:center;width:580px;' id='theme_img' src='http://www.methanelevels.org/img/graph_white.png' class='img-responsive' /></center></div><p style='text-align:left;'>Choose a theme and then copy & paste the code below where you would like it<br /> to appear on your website.</p><div style='text-align:center;'><input type='hidden' id='s_theme' value='default' />CHOOSE A THEME: &nbsp; <a   style='cursor:pointer' onclick=select_theme('graph_dark','dark-unica')>DARK</a> | <a  style='cursor:pointer' onclick=select_theme('graph_sand','sand-signika')>SAND</a> | <a  style='cursor:pointer' onclick=select_theme('graph_grid','grid-light')>GRID</a> | <a  style='cursor:pointer' onclick=select_theme('graph_white','default')>WHITE</a></div><br>";  
ht_modal_content_ch4=ht_modal_content_ch4+'<textarea id="ht_code_area" rows=5 cols=65><div id="ch4-widget-container"></div><script type="text/javascript" src="https://www.climatelevels.org/graphs/js/ch4.php?theme=default&pid=2degreesinstitute"></script></textarea><br /><div style="text-align:right"><a href=http://www.methanelevels.org#features target=_blank>Learn about graph features</a></div>';
function select_theme(img,s_theme){
	document.querySelector('#s_theme').value = s_theme;
	document.querySelector('#theme_img').setAttribute("src", "http://www.methanelevels.org/img/"+img+".png");	
	document.querySelector('#ht_code_area').innerHTML = '&lt;div id="ch4-widget-container"&gt;&lt;/div&gt;&lt;script type="text/javascript" src="https://www.climatelevels.org/graphs/js/ch4.php?theme='+s_theme+'&pid=2degreesinstitute"&gt;&lt;/script&gt;';
}
function view_theme_graph(){
	window.location.href="widget_test.php?theme=" + document.querySelector('#s_theme').value;
} 
(function() {
// Localize jQuery variable
    var jQuery;
    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.8.2') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src",
             "https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" );
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    scriptLoadHandler();
                }
            };
        } else {
            script_tag.onload = scriptLoadHandler;
        }
		if(flag == 1){
			document.getElementById("ch4-widget-container_" + flag).appendChild(script_tag);
		}else{	
			document.getElementById("ch4-widget-container").appendChild(script_tag);
		}
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        load_highcharts();
    }

    /******** Called once jQuery has loaded ******/
    function scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
        // Call our main function
        load_highcharts();
    }
    function load_highcharts(){
        console.log("load hc start 1");
        var script_tag_2 = document.createElement('script');
        script_tag_2.setAttribute("type","text/javascript");
        script_tag_2.setAttribute("src", "https://www.climatelevels.org/graphs/js/highcharts.js");
        if (script_tag_2.readyState) {
            script_tag_2.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    load_export();
                }
            };
        } else {
            script_tag_2.onload = load_export;
        }
		if(flag == 1){
			document.getElementById("ch4-widget-container_" + flag).appendChild(script_tag_2);
		}else{	
			document.getElementById("ch4-widget-container").appendChild(script_tag_2);
        }
    }
    function load_export(){
        var script_tag_3 = document.createElement('script');
        script_tag_3.setAttribute("type","text/javascript");
        script_tag_3.setAttribute("src", "https://www.climatelevels.org/graphs/js/exporting.js");
        if (script_tag_3.readyState) {
            script_tag_3.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    load_theme();
                }
            };
        } else {
            script_tag_3.onload = load_theme;
        }
		if(flag == 1){
			document.getElementById("ch4-widget-container_" + flag).appendChild(script_tag_3);
		}else{	
			document.getElementById("ch4-widget-container").appendChild(script_tag_3);
		}
    }
    function load_theme(){ 
		if(theme == "default"){
			main();
		}else{
			var script_tag_4 = document.createElement('script');

			script_tag_4.setAttribute("type","text/javascript");
			script_tag_4.setAttribute("src", "https://www.climatelevels.org/graphs/themes/"+theme+".js");
			if (script_tag_4.readyState) {
				script_tag_4.onreadystatechange = function () { // For old versions of IE
					if (this.readyState == 'complete' || this.readyState == 'loaded') {
						main();
					}
				};
			} else {
				script_tag_4.onload = main;
			}
			if(flag == 1){
				document.getElementById("ch4-widget-container_" + flag).appendChild(script_tag_4);
			}else{	
			document.getElementById("ch4-widget-container").appendChild(script_tag_4);
			}
		}
    }
	
	makeFrame();
	
	function makeFrame() { 
		ifrm = document.createElement("iframe"); 
		ifrm.setAttribute("src", "https://www.climatelevels.org/graphs/analytics.php?g=ch4&pid=2degreesinstitute"); 
		// ifrm.setAttribute("src", "./graphs/analytics.php"); 
		ifrm.setAttribute("id", "analytics"); 
		ifrm.setAttribute("display", "none"); 
		ifrm.style.width = 1 + "px"; 
		ifrm.style.height = 1 + "px"; 
		if(flag == 1){
			document.getElementById("ch4-widget-container_" + flag).appendChild(ifrm);
		}else{	
		document.getElementById("ch4-widget-container").appendChild(ifrm); 
		}	
	}	
	
    /******** Our main function ********/
    function main() {
         ht_modal = (function(){
            var method = {},
                $overlay,
                $modal,
                $content,
                $close;

            // Center the modal in the viewport
            method.center = function () {
                var top, left;

                top = Math.max(jQuery(window).height() - $modal.outerHeight(), 0) / 2;
                left = Math.max(jQuery(window).width() - $modal.outerWidth(), 0) / 2;

                $modal.css({
                    top:top + jQuery(window).scrollTop(),
                    left:left + jQuery(window).scrollLeft()
                });
            };

            // Open the modal
            method.open = function (settings) {
                $content.empty().append(settings.content);

                $modal.css({
                    width: settings.width || 'auto',
                    height: settings.height || 'auto'
                });

                method.center();
                jQuery(window).bind('resize.modal', method.center);
                $modal.show();
                $overlay.show();
            };

            // Close the modal
            method.close = function () {
                $modal.hide();
                $overlay.hide();
                $content.empty();
                $(window).unbind('resize.modal');
            };

            // Generate the HTML and add it to the document
            $overlay = jQuery('<div id="ht_overlay"></div>');
            $modal = jQuery('<div id="ht_modal"></div>');
            $content = jQuery('<div id="ht_content"></div>');
            $close = jQuery('<a id="ht_close" href="#">close</a>');
            $modal.hide();
            $overlay.hide();
            $modal.append($content, $close);

            jQuery(document).ready(function(){
                jQuery('body').append($overlay, $modal);
            });

             $close.click(function(e){
                e.preventDefault();
                method.close();
             });

            return method;
        }());
        jQuery(document).ready(function($) {
            /******* Load CSS *******/
            var css_link = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://www.climatelevels.org/graphs/css/co2-style.css"
            });
            css_link.appendTo('head');

            /******* Load HTML *******/
(function (Highcharts) {
    
    var each = Highcharts.each,
        UNDEFINED;
    
    /**
     * Utility function to remove last occurence of an item from an array
     * @param {Array} arr
     * @param {Mixed} item
     */
    function erase(arr, item) {
        var i = arr.length;
        while (i--) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                break;
            }
        }
        return i;
    }
    /**
     * Add an axis to the chart
     * @param {Object} options The axis option
     * @param {Boolean} isX Whether it is an X axis or a value axis
     */
    Highcharts.Chart.prototype.addAxis = function (options, isX) {
        var chart = this,
            key = isX ? 'xAxis' : 'yAxis',
            axis = new Highcharts.Axis(this, Highcharts.merge(options, {
                index: chart[key].length
            }));
        
        // Push the new axis options to the chart options
        chart.options[key] = Highcharts.splat(chart.options[key] || {});
        chart.options[key].push(options);
    };
    
    /**
     * Remove an axis from the chart
     */
    Highcharts.Axis.prototype.remove = function () {
        if (this.series.length) {
            console.error('Highcharts error: Cannot remove an axis that has connected series');
        } else {
            var chart = this.chart,
                key = this.isXAxis ? 'xAxis' : 'yAxis';

            // clean up chart options
            var axisIndex = this.options.index;
            chart.options[key].splice(axisIndex, 1);
            
            erase(chart.axes, this);
            var index = erase(chart[key], this);
            
            // clean up following axis options (indices)
            for (var i = index; i < chart[key].length; i++) {
              chart[key][i].options.index--;
            }
            
            this.destroy();
            chart.isDirtyBox = true;
            chart.redraw();
        }
    };
    
    /** 
     * The improved version of Series.bindAxes uses axis.id
     */
    /**
	 * Set the xAxis and yAxis properties of cartesian series, and register the series
	 * in the axis.series array
	 */
	Highcharts.Series.prototype.bindAxes = function () {
		var series = this,
			seriesOptions = series.options,
			chart = series.chart,
			axisOptions;
			
		if (series.isCartesian) {
			
			each(['xAxis', 'yAxis'], function (AXIS) { // repeat for xAxis and yAxis
				
				each(chart[AXIS], function (axis) { // loop through the chart's axis objects
					
					axisOptions = axis.options;
					
					// apply if the series xAxis or yAxis option mathches the number of the 
					// axis, or if undefined, use the first axis
					if ((seriesOptions[AXIS] === axisOptions.index) ||
							(seriesOptions[AXIS] !== UNDEFINED && seriesOptions[AXIS] === axisOptions.id) || // docs: series.xAxis and series.yAxis can point to axis.id
							(seriesOptions[AXIS] === UNDEFINED && axisOptions.index === 0)) {
						
						// register this series in the axis.series lookup
						axis.series.push(series);
						
						// set this series.xAxis or series.yAxis reference
						series[AXIS] = axis;
						
						// mark dirty for redraw
						axis.isDirty = true;
					}
				});

				// The series needs an X and an Y axis
				if (!series[AXIS]) {
					error(17, true);
				}

			});
		}
	};
}(Highcharts));   
				var ht_months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
			var aa = "",bb = "";
			var tem_height = 5,tem_width = 66,his_width = 14, distance_tool = 0;
						if(flag == 1){
							aa = 'ch4-widget-container_' + flag;
						}else{
							aa = 'ch4-widget-container';							
						}
			last_800000_year(aa);
            function last_800000_year(aa){
				$.getJSON("https://www.climatelevels.org/graphs/ch4-daily_data.php?callback=?", function (data) {
						var max_len=data.length;
						var today=data[max_len-1][0] + 24*3600*1000;
						var today_deg,today_date,today_day;
						var today_ppm=data[max_len-1][1];
						var text, textWidth;
						var temp_num = 0; 
						var chart = new Highcharts.Chart( {
							chart: {
								renderTo: aa,
								zoomType: 'x',
								events: {
									load: function() {
										var chart = this,
										x = chart.title.alignAttr.x;
										textWidth = chart.title.element.clientWidth;
										text = chart.title.textStr;
										
										var width = chart.chartWidth - 90,
											height = 6; 											
										if(this.container.parentNode.id == "ch4-widget-container_1"){	
											chart.renderer.image('https://www.climatelevels.org/graphs/images/logo_2degrees.png', width, height, 46, 46).addClass('credits_ch4_' + flag).add().attr("title","Visit 2 Degrees Institute");
										}else{
											chart.renderer.image('https://www.climatelevels.org/graphs/images/logo_2degrees.png', width, height, 46, 46).addClass('credits_ch4').add().attr("title","Visit 2 Degrees Institute");
										}
										if(this.container.parentNode.id == "ch4-widget-container_1"){
											jQuery('.credits_ch4_1').click(function(){
												window.location.href="http://www.2degreesinstitute.org";
											});
										}	
										else{
											jQuery('.credits_ch4').click(function(){
												window.location.href="http://www.2degreesinstitute.org";
											});
										}	
										if (textWidth / 2 + x >= chart.chartWidth - 130) {
											var textlist = text.split(' ');
											text2 = '';
											for(var i = 0; i < textlist.length; i++){
												if(i == textlist.length - 2){
													text2 = text2 + '<br>' + textlist[i] + ' ';
												}else{
													text2 = text2 + textlist[i] + ' ';
												}
											} 
											chart.setTitle({
												useHTML: true,
												text: text2
											})
										} else {
											chart.setTitle({
												useHTML: true,
												text: text
											})
										}
										jQuery('.highcharts-title').css('text-align','center');
										if(this.container.parentNode.id == "ch4-widget-container_1"){
											chart.renderer.image('https://www.climatelevels.org/graphs/images/button_history.png', his_width, tem_height, 50, 50).addClass('last_1000_year_ch4_' + flag).add().attr("title","Show last 800,000 years");
										}else{
										chart.renderer.image('https://www.climatelevels.org/graphs/images/button_history.png', his_width, tem_height, 50, 50).addClass('last_1000_year_ch4').add().attr("title","Show last 800,000 years");
										}	
										chart.container.childNodes[0].children[themenum].parentNode.appendChild(chart.container.childNodes[0].children[themenum]);
										 									
										$('.last_1000_year_ch4').click(function(){
											bb = this.parentNode.parentNode.parentNode.id; 
											last_1000_year(bb);
										})
										$('.last_1000_year_ch4_' + flag).click(function(){
											bb = this.parentNode.parentNode.parentNode.id; 
											last_1000_year(bb);
										})
										if(this.container.parentNode.id == "ch4-widget-container_1"){
											chart.renderer.image('https://www.climatelevels.org/graphs/images/button_temperature.png', tem_width, tem_height, 50, 50).addClass('button_temperature_800000_ch4_' + flag).add().attr("title","Insert Temperature Record");
											
										}else{
										chart.renderer.image('https://www.climatelevels.org/graphs/images/button_temperature.png', tem_width, tem_height, 50, 50).addClass('button_temperature_800000_ch4').add().attr("title","Insert Temperature Record");
										}
										
										chart.container.childNodes[0].children[themenum].parentNode.appendChild(chart.container.childNodes[0].children[themenum]);
										if(this.container.parentNode.id == "ch4-widget-container_1"){
											$('.button_temperature_800000_ch4_' + flag).click(function(){
												temperature_800000_ch4();
											}) 
										}else{	
										$('.button_temperature_800000_ch4').click(function(){
												temperature_800000_ch4();
											}) 
										}	
										function temperature_800000_ch4(){ 
											if(temp_num == 0){			
												chart.addAxis({
													opposite: true,
													id: 'Temperature Anomaly (&deg;C)',
													title: {
														text: 'Temperature Anomaly (*C)'
													}
												});     
												$.getJSON("https://www.climatelevels.org/graphs/temperature-daily_data.php?callback=?", function (data) {	
													max_len=data.length;		
													today_deg=data[max_len-1][1];today_date = data[max_len-1][0] + 24*3600*1000;
//													data.pop();						
													if(theme == 'dark-unica' || theme == 'gray'){
														chart.addSeries({
															name: 'Second series',
															color: 'white',
															type: 'line',
															data: data,
															yAxis: 'Temperature Anomaly (&deg;C)'
															 
														});
													}else{
														chart.addSeries({
															name: 'Second series',
															color: '#666666',
															type: 'line',
															data: data,
															yAxis: 'Temperature Anomaly (&deg;C)'
															 
														});
													}
												});
												temp_num++;
											}else{ 
												chart.series[1].remove();
												chart.yAxis[1].remove();
												temp_num = 0;
												
											}
											
										}
									},
									redraw: function () {
 										if(this.container.parentNode.id == "ch4-widget-container_1"){
											$('.button_temperature_800000_ch4_' + flag).remove();
											$('.last_1000_year_ch4_' + flag).remove();
											$('.credits_ch4_' + flag).remove();
										}else{
										$('.button_temperature_800000_ch4').remove();
											$('.last_1000_year_ch4').remove();
											$('.credits_ch4').remove();
										}	
										$('.highcharts-button').css("display","inline");
										var chart = this, width = chart.chartWidth - 90, height = 6;
										if(this.container.parentNode.id == "ch4-widget-container_1"){
											chart.renderer.image('https://www.climatelevels.org/graphs/images/logo_2degrees.png', width, height, 46, 46).addClass('credits_ch4_' + flag).add().attr("title","Visit 2 Degrees Institute");
										}else{
											chart.renderer.image('https://www.climatelevels.org/graphs/images/logo_2degrees.png', width, height, 46, 46).addClass('credits_ch4').add().attr("title","Visit 2 Degrees Institute");
										}	
										if(this.container.parentNode.id == "ch4-widget-container_1"){
											jQuery('.credits_ch4_1').click(function(){
												window.location.href="http://www.2degreesinstitute.org";
											});
										}	
										else{
											jQuery('.credits_ch4').click(function(){
												window.location.href="http://www.2degreesinstitute.org";
											});
										} 				
										x = chart.title.alignAttr.x;									
										if (textWidth / 2 + x >= width - 50) {
											var textlist = text.split(' ');
											text2 = '';
											for(var i = 0; i < textlist.length; i++){
												if(i == textlist.length - 2){
													text2 = text2 + '<br>' + textlist[i] + ' ';
												}else{
													text2 = text2 + textlist[i] + ' ';
												}
											} 						
											chart.setTitle({
												useHTML: true,
												text: text2
											})
										} else {										
											chart.setTitle({
												useHTML: true,
												text: text
											})
										}
										jQuery('.highcharts-title').css('text-align','center');
										
										if(this.container.parentNode.id == "ch4-widget-container_1"){
											chart.renderer.image('https://www.climatelevels.org/graphs/images/button_history.png', his_width, tem_height, 50, 50).addClass('last_1000_year_ch4_' + flag).add().attr("title","Show last 800,000 years");
										}else{
										chart.renderer.image('https://www.climatelevels.org/graphs/images/button_history.png', his_width, tem_height, 50, 50).addClass('last_1000_year_ch4').add().attr("title","Show last 800,000 years");
										}	
										chart.container.childNodes[0].children[themenum].parentNode.appendChild(chart.container.childNodes[0].children[themenum]);										
										$('.last_1000_year_ch4').click(function(){
											bb = this.parentNode.parentNode.parentNode.id; 
											last_1000_year(bb);
										})
										$('.last_1000_year_ch4_1').click(function(){
											bb = this.parentNode.parentNode.parentNode.id; 
											last_1000_year(bb);
										})
										if(this.container.parentNode.id == "ch4-widget-container_1"){
											chart.renderer.image('https://www.climatelevels.org/graphs/images/button_temperature.png', tem_width, tem_height, 50, 50).addClass('button_temperature_800000_ch4_' + flag).add().attr("title","Insert Temperature Record");
										}else{
										chart.renderer.image('https://www.climatelevels.org/graphs/images/button_temperature.png', tem_width, tem_height, 50, 50).addClass('button_temperature_800000_ch4').add().attr("title","Insert Temperature Record");
											
										}	
										chart.container.childNodes[0].children[themenum].parentNode.appendChild(chart.container.childNodes[0].children[themenum]);
										if(this.container.parentNode.id == "ch4-widget-container_1"){
											$('.button_temperature_800000_ch4_' + flag).click(function(){
												temperature_800000_ch4();
											}) 
										}else{	
										$('.button_temperature_800000_ch4').click(function(){
												temperature_800000_ch4();
											}) 
										}	
										function temperature_800000_ch4(){
											if(temp_num == 0){			
												chart.addAxis({
													opposite: true,
													id: 'Temperature Anomaly (&deg;C)',
													title: {
														text: 'Temperature Anomaly (*C)'
													}
												});     
												$.getJSON("https://www.climatelevels.org/graphs/temperature-daily_data.php?callback=?", function (data) {	
													max_len=data.length; 
													today_deg = data[max_len-1][1];today_date = data[max_len-1][0] + 24*3600*1000; 
//													data.pop();	
													if(theme == 'dark-unica' || theme == 'gray'){
														chart.addSeries({
															name: 'Second series',
															color: 'white',
															type: 'line',
															data: data,
															yAxis: 'Temperature Anomaly (&deg;C)'
															 
														});
													}else{
														chart.addSeries({
															name: 'Second series',
															color: '#666666',
															type: 'line',
															data: data,
															yAxis: 'Temperature Anomaly (&deg;C)'
															 
														});
													}
												});
												temp_num++;
											}else{ 
												chart.series[1].remove();
												chart.yAxis[1].remove();
												temp_num = 0;
												
											}
											
										}
										 
									}
								}
							},

							title: {
								useHTML: true,
								text: 'Global CH<sub>4</sub> Levels'
							},

							subtitle: {
								text: document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
							},

							xAxis: {
								type: 'datetime'
							},

							yAxis: {
								title: {
									useHTML: true,
									text: 'Methane (CH<sub>4</sub> ppb)'
								}
							},

							legend: {
								useHTML: true,
								enabled: false
							},

							tooltip: {
								useHTML: true,
								crosshairs: [true],
								formatter: function () {
									if(this.series.name == 'CH<sub>4</sub>'){
										this.x = this.x + 24*3600*1000;
										var a= new Date(this.x); 
										if(this.x==today){
											var pp="";
										}else{
											var delta=today_ppm-this.y;
											 var pp=Math.round((this.y/today_ppm-1)*100);
											if(delta<=0){
												pp=Math.abs(pp)+"% higher ";
											}else{
												pp=Math.abs(pp)+"% lower ";
											}
											pp="<br>"+pp+"than present day.";
										}
											
										if(a.getFullYear()<1983){
											if(a.getMonth() == 0){
												return 'Year  '+ a.getFullYear()+'<br>CH<sub>4</sub> PPB: <b>'+this.y+'</b>' + pp;
											}else{
											return ht_months[a.getMonth()]+' '+a.getDate()+', '+ a.getFullYear()+'<br>CH<sub>4</sub> PPB: <b>'+this.y+'</b>' + pp;
											}
										}else{
											return ht_months[a.getMonth()]+' '+ a.getFullYear()+'<br>CH<sub>4</sub> PPB: <b>'+this.y+'</b>' + pp;
											
										}
									}else{
										this.x = this.x + 24*3600*1000;
										var a= new Date(this.x);  
										if(this.x==today_date){
											var pp="";
										}else{
											today_day =new Date(today_date);
											var delta=today_deg-this.y;
											 var pp=(this.y-today_deg);
											if(delta<=0){
												pp=Math.abs(Math.floor(pp*100)/100)+"&deg;C warmer ";
											}else{
												pp=Math.abs(Math.floor(pp*100)/100)+"&deg;C cooler ";
											}
											pp="<br>"+pp+"than " + ht_months[today_day.getMonth()] + " " + today_day.getFullYear() + ".";
										}
										if(a.getFullYear()<1880){
											if(a.getMonth() == 0 && a.getDate() == 1) {
												return 'Year '+a.getFullYear()+'<br>Temperature Anomaly: <b>'+this.y+'&deg;C</b>' + pp;
											}else{
												return ht_months[a.getMonth()]+' '+a.getDate()+', '+ a.getFullYear()+'<br>Temperature Anomaly: <b>'+this.y+'&deg;C</b>' + pp;										
											}
										}else{
											return ht_months[a.getMonth()]+' '+ a.getFullYear()+'<br>Temperature Anomaly: <b>'+this.y+'&deg;C</b>' + pp;
										}
									} 
								},
								positioner: function(boxWidth, boxHeight, point) { 
									var chart = this.chart,
										plotLeft = chart.plotLeft,
										plotTop = chart.plotTop,
										plotWidth = chart.plotWidth,
										plotHeight = chart.plotHeight,
										distance = 5,
										pointX = point.plotX,
										pointY = point.plotY,
										x = pointX + plotLeft + (chart.inverted ? distance : -boxWidth - distance),
										y = pointY - boxHeight / 2 + plotTop,
										alignedRight;
									if ((x + boxWidth) > (plotLeft + plotWidth)) {
										x -= (x + boxWidth) - (plotLeft + plotWidth);	
										y = pointY - boxHeight + plotTop - distance;
										alignedRight = true;
									}

									if (x < 7) {
										x = plotLeft + pointX + distance;
									}

									if (y < plotTop + 5) {
										y = plotTop + 5;
										if (alignedRight && pointY >= y && pointY <= (y + boxHeight)) {
											y = pointY + plotTop + distance; 
										}
									}
									
									if (y + boxHeight > plotTop + plotHeight) {
										y = Math.max(plotTop, plotTop + plotHeight - boxHeight - distance); // below
									}
									if(70 > y - boxHeight / 2) {
										y = y + 70 - y + boxHeight / 2 - distance_tool;	//alert(y);	
									}
									return {x:x, y:y};         
								}
							},

							plotOptions: {
								area: {
									fillColor: {
										linearGradient: {
											x1: 0,
											y1: 0,
											x2: 0,
											y2: 1
										},
										stops: [
											[0, Highcharts.getOptions().colors[0]],
											[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
										]
									},
									marker: {
										radius: 2
									},
									lineWidth: 1,
									states: {
										hover: {
											lineWidth: 1
										}
									},
									threshold: null
								}
							},

							series: [{
								useHTML: true,
								type: 'area',
								name: 'CH<sub>4</sub>',// PPB 344. 33% lower than present day.',
								data: data
							}]
						});
				});
			}
			function formatCommas(numString) {
				var re = /(-?\d+)(\d{3})/;
				while (re.test(numString)) {
					numString = numString.replace(re, "$1,$2");
				}
				return numString;
			}
			function last_1000_year(aa){   
				$.getJSON("https://www.climatelevels.org/graphs//ch4-daily_data_last.php?callback=?", function (data) { 
					var year = 60 * 60 * 24 * 365, max;
                    var max_len=data.length;
                   var today = data[max_len-1][0]/1000;
					var today_deg,today_date,today_day;
                    var today_ppm=data[max_len-1][1];      
					var temp_num = 0;
					data.pop();
					var text, textWidth;
                    var chart = new Highcharts.Chart( {
                        chart: {
                            renderTo: aa,
                            zoomType: 'x',
                            events: {
                                load: function() {
									var chart = this,
									x = chart.title.alignAttr.x;
									textWidth = chart.title.element.clientWidth;
									text = chart.title.textStr;
									var width = chart.chartWidth - 90,
										height = 6;
									if(this.container.parentNode.id == "ch4-widget-container_1"){	
										chart.renderer.image('https://www.climatelevels.org/graphs/images/logo_2degrees.png', width, height, 46, 46).addClass('credits_ch4_' + flag).add().attr("title","Visit 2 Degrees Institute");
									}else{
										chart.renderer.image('https://www.climatelevels.org/graphs/images/logo_2degrees.png', width, height, 46, 46).addClass('credits_ch4').add().attr("title","Visit 2 Degrees Institute");
									}	
									if(this.container.parentNode.id == "ch4-widget-container_1"){
										jQuery('.credits_ch4_1').click(function(){
											window.location.href="http://www.2degreesinstitute.org";
										});
									}	
									else{
										jQuery('.credits_ch4').click(function(){
											window.location.href="http://www.2degreesinstitute.org";
										});
									}	
									if (textWidth / 2 + x >= chart.chartWidth - 130) {
										var textlist = text.split(' ');
										text2 = '';
										for(var i = 0; i < textlist.length; i++){
											if(i == textlist.length - 2){
												text2 = text2 + '<br>' + textlist[i] + ' ';
											}else{
												text2 = text2 + textlist[i] + ' ';
											}
										} 
										chart.setTitle({
											useHTML: true,
											text: text2
										})
									} else {
										chart.setTitle({
											useHTML: true,
											text: text
										})
									}
									jQuery('.highcharts-title').css('text-align','center');
									if(this.container.parentNode.id == "ch4-widget-container_1"){
										chart.renderer.image('https://www.climatelevels.org/graphs/images/button_history.png', his_width, tem_height, 50, 50).addClass('last_800000_year_ch4_' + flag).add().attr("title","Show last 1000 years");
									}else{
										chart.renderer.image('https://www.climatelevels.org/graphs/images/button_history.png', his_width, tem_height, 50, 50).addClass('last_800000_year_ch4').add().attr("title","Show last 1000 years");
										
									}	
										chart.container.childNodes[0].children[themenum].parentNode.appendChild(chart.container.childNodes[0].children[themenum]);									
									if(this.container.parentNode.id == "ch4-widget-container_1"){	
										$('.last_800000_year_ch4_' + flag).click(function(){ 
											bb = this.parentNode.parentNode.parentNode.id; 
											last_800000_year(bb); 									
										})
									}else{
										$('.last_800000_year_ch4').click(function(){
											bb = this.parentNode.parentNode.parentNode.id; 
											last_800000_year(bb); 									
										})
										
									}	
									if(this.container.parentNode.id == "ch4-widget-container_1"){	
										chart.renderer.image('https://www.climatelevels.org/graphs/images/button_temperature.png', tem_width, tem_height, 50, 50).addClass('button_temperature_1000_ch4_' + flag).add().attr("title","Insert Temperature Record");
									}else{
										chart.renderer.image('https://www.climatelevels.org/graphs/images/button_temperature.png', tem_width, tem_height, 50, 50).addClass('button_temperature_1000_ch4').add().attr("title","Insert Temperature Record");
									}	
										chart.container.childNodes[0].children[themenum].parentNode.appendChild(chart.container.childNodes[0].children[themenum]);
									if(this.container.parentNode.id == "ch4-widget-container_1"){
										$('.button_temperature_1000_ch4_' + flag).click(function(){
											temperature_1000_ch4(); 
										})
									}else{	
										$('.button_temperature_1000_ch4').click(function(){
											temperature_1000_ch4();
										}) 
									}	
									function temperature_1000_ch4(){
										 
											if(temp_num == 0){			
												chart.addAxis({
													opposite: true,
													id: 'Temperature Anomaly (&deg;C)',
													title: {
														text: 'Temperature Anomaly (*C)'
													}
												});     
												$.getJSON("https://www.climatelevels.org/graphs/temperature-daily_data_last.php?callback=?", function (data) {					
													var max_len=data.length;
													today_deg = data[max_len-1][1];today_date = data[max_len-1][0] + 24*3600*1000; 
													data.pop();
													if(theme == 'dark-unica' || theme == 'gray'){
														chart.addSeries({
															name: 'Second series',
															color: 'white',
															type: 'line',
															data: data,
															yAxis: 'Temperature Anomaly (&deg;C)'
															 
														});
													}else{
														chart.addSeries({
															name: 'Second series',
															color: '#666666',
															type: 'line',
															data: data,
															yAxis: 'Temperature Anomaly (&deg;C)'
															 
														});
													}
												});
												temp_num++;
											}else{ 
												chart.series[1].remove();
												chart.yAxis[1].remove();
												temp_num = 0;
												
											} 		
									}
								},
                                redraw: function () {
                                    if(this.container.parentNode.id == "ch4-widget-container_1"){
										$('.credits_ch4_' + flag).remove();
									}else{
                                    $('.credits_ch4').remove();
									} 
									if(this.container.parentNode.id == "ch4-widget-container_1"){
										$('.button_temperature_1000_ch4_' + flag).remove();
										$('.last_800000_year_ch4_' + flag).remove();
										$('.credits_ch4_' + flag).remove();
									}else{
                                    $('.button_temperature_1000_ch4').remove();
										$('.last_800000_year_ch4').remove();
										$('.credits_ch4').remove();
									}
 									$('.highcharts-button').css("display","inline");
                                    var chart = this, width = chart.chartWidth - 90, height = 6; 
                                    if(this.container.parentNode.id == "ch4-widget-container_1"){
										chart.renderer.image('https://www.climatelevels.org/graphs/images/logo_2degrees.png', width, height, 46, 46).addClass('credits_ch4_' + flag).add().attr("title","Visit 2 Degrees Institute");
									}else{
										chart.renderer.image('https://www.climatelevels.org/graphs/images/logo_2degrees.png', width, height, 46, 46).addClass('credits_ch4').add().attr("title","Visit 2 Degrees Institute");
									}	
									if(this.container.parentNode.id == "ch4-widget-container_1"){
										jQuery('.credits_ch4_1').click(function(){
											window.location.href="http://www.2degreesinstitute.org";
										});
									}	
									else{
										jQuery('.credits_ch4').click(function(){
											window.location.href="http://www.2degreesinstitute.org";
										});
									}	
                                    if(this.container.parentNode.id == "ch4-widget-container_1"){
										chart.renderer.image('https://www.climatelevels.org/graphs/images/button_history.png', his_width, tem_height, 50, 50).addClass('last_800000_year_ch4_' + flag).add().attr("title","Show last 1000 years");
									}else{
									chart.renderer.image('https://www.climatelevels.org/graphs/images/button_history.png', his_width, tem_height, 50, 50).addClass('last_800000_year_ch4').add().attr("title","Show last 1000 years");
									}	
										chart.container.childNodes[0].children[themenum].parentNode.appendChild(chart.container.childNodes[0].children[themenum]);										
									if(this.container.parentNode.id == "ch4-widget-container_1"){	
										$('.last_800000_year_ch4_' + flag).click(function(){ 
											bb = this.parentNode.parentNode.parentNode.id; 
											last_800000_year(bb); 									
										})
									}else{
										$('.last_800000_year_ch4').click(function(){
											bb = this.parentNode.parentNode.parentNode.id; 
											last_800000_year(bb); 									
										})
										
									}	

									if(this.container.parentNode.id == "ch4-widget-container_1"){
										$('.button_temperature_1000_ch4_' + flag).click(function(){
											temperature_1000_ch4(); 
										})
									}else{	
										$('.button_temperature_1000_ch4').click(function(){
											temperature_1000_ch4();
										}) 
									}	
									if(this.container.parentNode.id == "ch4-widget-container_1"){	
										chart.renderer.image('https://www.climatelevels.org/graphs/images/button_temperature.png', tem_width, tem_height, 50, 50).addClass('button_temperature_1000_ch4_' + flag).add().attr("title","Insert Temperature Record");
									}else{
										chart.renderer.image('https://www.climatelevels.org/graphs/images/button_temperature.png', tem_width, tem_height, 50, 50).addClass('button_temperature_1000_ch4').add().attr("title","Insert Temperature Record");
									}	
										chart.container.childNodes[0].children[themenum].parentNode.appendChild(chart.container.childNodes[0].children[themenum]);
									$('.button_temperature_1000_ch4').click(function(){
										temperature_1000_ch4();
									});   
									$('.button_temperature_1000_ch4_' + flag).click(function(){
										temperature_1000_ch4(); 
									}) 
									function temperature_1000_ch4(){
										 
											if(temp_num == 0){			
												chart.addAxis({
													opposite: true,
													id: 'Temperature Anomaly (&deg;C)',
													title: {
														text: 'Temperature Anomaly (*C)'
													}
												});     
												$.getJSON("https://www.climatelevels.org/graphs/temperature-daily_data_last.php?callback=?", function (data) {	
													var max_len=data.length;
													today_deg = data[max_len-1][1];today_date = data[max_len-1][0] + 24*3600*1000; 
													data.pop();
													if(theme == 'dark-unica' || theme == 'gray'){
														chart.addSeries({
															name: 'Second series',
															color: 'white',
															type: 'line',
															data: data,
															yAxis: 'Temperature Anomaly (&deg;C)'
															 
														});
													}else{
														chart.addSeries({
															name: 'Second series',
															color: '#666666',
															type: 'line',
															data: data,
															yAxis: 'Temperature Anomaly (&deg;C)'
														
														});
													}
												});
												temp_num++;
											}else{ 
												chart.series[1].remove();
												chart.yAxis[1].remove();
												temp_num = 0;
												
											} 
									}
									x = chart.title.alignAttr.x;									
									if (textWidth / 2 + x >= width - 50) {
										var textlist = text.split(' ');
										text2 = '';
										for(var i = 0; i < textlist.length; i++){
											if(i == textlist.length - 2){
												text2 = text2 + '<br>' + textlist[i] + ' ';
											}else{
												text2 = text2 + textlist[i] + ' ';
											}
										} 
										chart.setTitle({
											useHTML: true,
											text: text2
										})
									} else {										
										chart.setTitle({
											useHTML: true,
											text: text
										})
									}
									jQuery('.highcharts-title').css('text-align','center');
                               
                                }
                            }

                        },

                        title: {
                            useHTML: true,
                            text: 'Global CH<sub>4</sub> Levels'
                        },

                        subtitle: {
                            text: document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                        },
						
                        xAxis: {							
							gridLineWidth: 1,
							minorGridLineWidth: 1,
							gridLineColor: 'rgba(255, 255, 255, .1)',
							type: 'datetime',
							labels: {
								formatter: function() {
									var dataMax = this.chart.xAxis[0].dataMax;
								    max = this.chart.xAxis[0].max;
									return ((dataMax - this.value) / (year) / 1000).toFixed(0) + 'k years ago'
								}
							  },
							  events: {} 
                        },

                        yAxis: {
                            title: {
                                useHTML: true,
                                text: 'Methane (CH<sub>4</sub> ppb)'
                            }
                        },

                        legend: {
                            useHTML: true,
                            enabled: false
                        },

                        tooltip: {
                            useHTML: true,
							crosshairs: [true],
                            formatter: function () {
								this.x = this.x;
							if(this.series.name == 'CH<sub>4</sub>'){
                                if(this.x==today){
                                    var pp="";
                                }else{
                                    var delta=today_ppm-this.y;
                                    var pp=Math.round((this.y/today_ppm-1)*100);						
                                    if(delta<=0){
                                        pp=Math.abs(pp)+"% higher ";
                                    }else{
                                        pp=Math.abs(pp)+"% lower ";
                                    }
                                    pp="<br>"+pp+"than present day.";
                                }
								
								if(Math.abs(this.x/year).toFixed(0) == 1){
									return formatCommas(Math.abs(this.x/year).toFixed(0)) + ' year ago'+'<br>CH<sub>4</sub> PPB: <b>'+(this.y)+'</b>';
								}else{
									var fDate = Math.abs(this.x/year);
									if(fDate>1000) {
										fDate = Math.floor(fDate/100)*100;
									}
									if(Math.abs(this.x/year)>1000) {
										
										return 'Approx. ' + formatCommas(fDate.toFixed(0)) + ' years ago'+'<br>CH<sub>4</sub> PPB: <b>'+ this.y +'</b>' + pp;
										
									}else{
										if(Math.abs(this.x/year)>191) {
											return 'Approx. ' + formatCommas(fDate.toFixed(0)) + ' years ago'+'<br>CH<sub>4</sub> PPB: <b>'+this.y+'</b>' + pp;
										}else{
											return formatCommas(fDate.toFixed(0)) + ' years ago'+'<br>CH<sub>4</sub> PPB: <b>'+this.y+'</b>' + pp;
										}
									}
								}
							}else{
									today_day =new Date(today_date);
                                    var delta=today_deg-this.y;
                                    var pp=(this.y-today_deg);						
									if(this.x==today_date){
										var pp="";
									}else{
										var delta=today_deg-this.y;
										var pp=(this.y-today_deg);						
                                    if(delta<=0){
                                        pp=Math.abs(Math.floor(pp*100)/100)+"&deg;C warmer ";
                                    }else{
                                        pp=Math.abs(Math.floor(pp*100)/100)+"&deg;C cooler ";
                                    }
											pp="<br>"+pp+"than " + ht_months[today_day.getMonth()] + " " + today_day.getFullYear() + ".";
                                }
								if(Math.abs(this.x/year).toFixed(0) == 1){
									return formatCommas(Math.abs(this.x/year).toFixed(0)) + ' year ago'+'<br>Temperature Anomaly: <b>'+this.y+'&deg;C</b>';
								}else{
									var fDate = Math.abs(this.x/year);
									if(fDate>1000) {
										fDate = Math.floor(fDate/100)*100;
									}
									if(Math.abs(this.x/year)>1000) {
										
										return 'Approx. ' + formatCommas(fDate.toFixed(0)) + ' years ago'+'<br>Temperature Anomaly: <b>'+ this.y+'&deg;C</b>' + pp;
									}else{
										if(Math.abs(this.x/year)>191) {
											return 'Approx. ' + formatCommas(fDate.toFixed(0)) + ' years ago'+'<br>Temperature Anomaly: <b>'+this.y+'&deg;C</b>' + pp;
										}else{
												return formatCommas(fDate.toFixed(0)) + ' years ago'+'<br>Temperature Anomaly: <b>'+this.y+'&deg;C</b>' + pp;
										}
									}
								}
								
							}
                            },
							positioner: function(boxWidth, boxHeight, point) { 
								var chart = this.chart,
									plotLeft = chart.plotLeft,
									plotTop = chart.plotTop,
									plotWidth = chart.plotWidth,
									plotHeight = chart.plotHeight,
									distance = 5,
									pointX = point.plotX,
									pointY = point.plotY,
									x = pointX + plotLeft + (chart.inverted ? distance : -boxWidth - distance),
									y = pointY - boxHeight / 2 + plotTop,
									alignedRight;
								if ((x + boxWidth) > (plotLeft + plotWidth)) {
									x -= (x + boxWidth) - (plotLeft + plotWidth);	

									y = pointY - boxHeight + plotTop - distance;

									alignedRight = true;
								}

								if (x < 7) {
									x = plotLeft + pointX + distance;
								}

								if (y < plotTop + 5) {
									y = plotTop + 5;
									
									if (alignedRight && pointY >= y && pointY <= (y + boxHeight)) {
										y = pointY + plotTop + distance; 
									}
								}
								
								if (y + boxHeight > plotTop + plotHeight) {
									y = Math.max(plotTop, plotTop + plotHeight - boxHeight - distance); // below
								}
				
								if(70 > y - boxHeight / 2) {
									y = y + 70 - y + boxHeight / 2 - distance_tool;	//alert(y);	
								}
						
								return {x:x, y:y};         
							}
                        },

                        plotOptions: {
                            area: {
                                fillColor: {
                                    linearGradient: {
                                        x1: 0,
                                        y1: 0,
                                        x2: 0,
                                        y2: 1
                                    },
                                    stops: [
                                        [0, Highcharts.getOptions().colors[0]],
                                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                    ]
                                },
                                marker: {
                                    radius: 2
                                },
                                lineWidth: 1,
                                states: {
                                    hover: {
                                        lineWidth: 1
                                    }
                                },
                                threshold: null
                            }
                        },

                        series: [{
                            useHTML: true,
                            type: 'area',
                            name: 'CH<sub>4</sub>',// PPB 344. 33% lower than present day.',
                            data: data
                        }]
                    }); 
				});
			}
        });
    }
})();

