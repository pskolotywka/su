function take_a_credit() {
	{
		if (document.getElementById("take_a_credit_activate" || "take_a_credit_email" || "take_a_credit_guy").click) 
			{
			document.getElementById("end_task").style.display = 'block'; 	 
			} 
	};	
}

function function_form_SU4() {
	{
		if (document.getElementById("form__SU3" || "form__SU4").click) 
			{
			document.getElementById("my_cl_count1").style.display = 'none';
			document.getElementById("my_cl_count2").style.display = 'none';
			document.getElementById("take_a_credit").style.display = 'block'; 
			document.getElementById("su4-1").style.display = 'block'; 	 
			document.getElementById("su3-1").style.display = 'none'; 
			} 
	};	
}

function function_cl_count1()
	{
		if (document.getElementById("form__SU3-1" || "form__SU4-1").click) 
			{
			document.getElementById("my_cl_count1").style.display = 'block'; 
			document.getElementById("appointment").style.display = 'none'; 	 
			document.getElementById("take_a_credit").style.display = 'none'; 	 
			} 
	};
function function_cl_count2()
	{
		if (document.getElementById("form__SU3-1" || "form__SU4-1").click) 
			{
			document.getElementById("my_cl_count2").style.display = 'block'; 
			document.getElementById("appointment").style.display = 'none'; 	 
			document.getElementById("my_cl_count1").style.display = 'none'; 	 
			document.getElementById("take_a_credit").style.display = 'none'; 

			} 
	};


function function_form_SU3()
	{
		if (document.getElementById("form__SU3").click) 
			{
			document.getElementById("su3-1").style.display = 'block'; 
			document.getElementById("take_a_credit").style.display = 'block'; 
			document.getElementById("su4-1").style.display = 'none'; 	 
			document.getElementById("my_cl_count1").style.display = 'none'; 	 
			document.getElementById("my_cl_count2").style.display = 'none'; 	 
			document.getElementById("appointment").style.display = 'none'; 	 
			} 
	};


function function__hide_cl_count()
	{
		if (document.getElementById("form__SU1" , "form__SU2").click) 
			{
			document.getElementById("su4-1").style.display = 'none'; 	 
			document.getElementById("my_cl_count1").style.display = 'none'; 	 
			document.getElementById("my_cl_count2").style.display = 'none'; 	 
			document.getElementById("su3-1").style.display = 'none'; 
			document.getElementById("appointment").style.display = 'block'; 
			document.getElementById("take_a_credit").style.display = 'none'; 
			} 
	};	

function function_confirm_cancel()
	{
		if (document.getElementById("confirm_cancel").click) 
			{
			document.getElementById("modal").style.display = 'none'; 	 
			} 
	};


function function_confirm_meet()
	{
		if (document.getElementById("confirm_meet").click) 
			{
			document.getElementById("modal").style.display = 'block'; 	 
			} 
	};

function function_confirm_day_and_time()
	{
		if (document.getElementById("confirm_day_and_time").click) 
			{
			document.getElementById("set_time_and_date").style.display = 'block'; 	 
			document.getElementById("confirm_day_and_time").style.display = 'none'; 
			} 
	};


function function_change_p2()
	{
		if (document.getElementById("change_p2").click) 
			{ 
			document.getElementById("confirm_with_mail").style.display = 'none'; 
			document.getElementById("appointment__new_address").style.display = 'none';  
			document.getElementById("set_time_and_date").style.display = 'none';  
			document.getElementById("confirm_day_and_time").style.display = 'block';  
			} 
	};

function function_change_p3()
	{
		if (document.getElementById("change_p3").click) 
			{
			document.getElementById("confirm_with_mail").style.display = 'none'; 
			document.getElementById("appointment__new_address").style.display = 'flex'; 
			document.getElementById("confirm_day_and_time").style.display = 'block';
			document.getElementById("set_time_and_date").style.display = 'none';  
			} 
	};

function function_change_p1()
	{
		if (document.getElementById("change_p1").click) 
			{
			document.getElementById("confirm_with_mail").style.display = 'block'; 
			document.getElementById("appointment__new_address").style.display = 'none'; 
			document.getElementById("confirm_day_and_time").style.display = 'block';
			document.getElementById("set_time_and_date").style.display = 'none';  
			} 
	};

function function_appointment__another_time_or_place()
	{
		if (document.getElementById("appointment__another_time_or_place").click) 
			{
			document.getElementById("change_place").style.display = 'block'; 
			document.getElementById("appointment__ops").style.display = 'none'; 
			document.getElementById("appointment").style.display = 'none'; 
			} 
	};


function function_appointment_show()
	{
		if (document.getElementById("appointment").click) 
			{
			document.getElementById("appointment__ops").style.display = 'block';
			document.getElementById("SU").style.display = 'none';
			document.getElementById("credit_condition").style.display = 'none'; 
			document.getElementById("appointment").style.display = 'none'; 
			} 
	};



function preparePage() 
{
	document.getElementById("perezvon__paragraph__checkbox_time_recall_selected").onclick = function() {
		if (document.getElementById("perezvon__paragraph__checkbox_time_recall_selected").checked) 
			{
			document.getElementById("perezvon__wrap2").style.display = 'block';
			} 
		else {
			document.getElementById("perezvon__wrap2").style.display = 'none';
		} 
	}; 
}

window.onload = function() {
	preparePage();
};




function function_name1() 
{
		if (document.getElementById("row2_yes").checked) 
			{
			document.getElementById("row3_y").style.display = 'table-row';
			document.getElementById("row3_n").style.display = 'none';
			document.getElementById("row3_znakomy_yes").style.display = 'none';
			document.getElementById("row4_otkaz_3lico").style.display = 'none';
			} 
		// else if (document.getElementById("row2_no").checked)
		// 	{
		// 	document.getElementById("row3_n").style.display = 'table-row';	

		// 	document.getElementById("row3_y").style.display = 'none';
		// 	document.getElementById("row4_cl").style.display = 'none';
		// 	document.getElementById("row5_tp_spereschetom").style.display = 'none';
		// 	document.getElementById("row7_not_activated_cc2").style.display = 'none';
		// 	document.getElementById("row8_email_possible").style.display = 'none';
		// 	document.getElementById("row9_email_no").style.display = 'none';
		// 	document.getElementById("row5_rsv_for_cc").style.display = 'none';
		// 	document.getElementById("row4_cc").style.display = 'none';
		// 	document.getElementById("row5_cc_advantages").style.display = 'none';
		// 	document.getElementById("row6_cc_to_offer_cl_yes_no").style.display = 'none'; 
		// 	document.getElementById("no4_row5_predlojenie_cl").style.display = 'none'; 
		// 	document.getElementById("next5_row6_count_for_cl").style.display = 'none'; 
		// 	document.getElementById("y7_r8_attention_cc2").style.display = 'none'; 
		// 	document.getElementById("r8next_r9_can_get_on_email").style.display = 'none'; 
		// 	document.getElementById("y10_r11_confirm_condition_for_cl").style.display = 'none';
		// 	document.getElementById("y11_r12_can_activate_now").style.display = 'none';
		// 	document.getElementById("row7_offer_cl_to_recount").style.display = 'none';
		// 	document.getElementById("y7_row8_offer_cl_tp_recount").style.display = 'none';
		// 	document.getElementById("row9_cl_count_rsv").style.display = 'none';
		// 	document.getElementById("y6_ro7_attention_cc").style.display = 'none';
		// 	document.getElementById("row11_may_get_on_email").style.display = 'none';
		// 	document.getElementById("yes11_row12_offer_cl_email_is_correct").style.display = 'none';
		// 	document.getElementById("yes12_row13_offer_cl_can_send_on_email").style.display = 'none';
		// 	document.getElementById("n9_r10_choose_offer_cl").style.display = 'none';   
		// 	document.getElementById("function_r12_can_activate_now_no").style.display = 'none';   
		// 	document.getElementById("row10_unactivated_cc3").style.display = 'none';    

			}
	// };



function function_name2() 
	{
		if (document.getElementById("row2_no").checked) 
			{
			document.getElementById("row3_n").style.display = 'table-row';
			document.getElementById("row3_y").style.display = 'none';  
			document.getElementById("row3_znakomy_yes").style.display = 'none';  
			document.getElementById("row4_cl").style.display = 'none';  
			document.getElementById("row4_cc").style.display = 'none';  
			document.getElementById("row4_otkaz_3lico").style.display = 'none';  
			document.getElementById("row5_tp_spereschetom").style.display = 'none';  
			document.getElementById("row5_cc_advantages").style.display = 'none';  
			document.getElementById("row5_cc_yes_neakt_cc").style.display = 'none';  
			document.getElementById("row5_rsv_for_cc").style.display = 'none';  
			document.getElementById("no4_row5_predlojenie_cl").style.display = 'none';  
			document.getElementById("row6_neakt_no_choose_cc").style.display = 'none';  
			document.getElementById("row6_cc_to_offer_cl_yes_no").style.display = 'none';  
			document.getElementById("no5_row6_choose_product_cc").style.display = 'none';  
			document.getElementById("y5_r6_attention_cc").style.display = 'none';  
			document.getElementById("next_r7_choose_product_cc").style.display = 'none';  
			document.getElementById("next5_row6_count_for_cl").style.display = 'none';  
			document.getElementById("row7_not_activated_cc2").style.display = 'none';  
			document.getElementById("row7_no_offer_cl_from_cc_sorry").style.display = 'none';  
			document.getElementById("row7_offer_cl_to_recount").style.display = 'none';  
			document.getElementById("no6_rw7_1rsv_for_cl_and_cc").style.display = 'none';  
			document.getElementById("y6_ro7_attention_cc").style.display = 'none';  
			document.getElementById("row8_email_possible").style.display = 'none';  
			document.getElementById("y7_r8_attention_cc2").style.display = 'none';  
			document.getElementById("no7_r8_different_offer").style.display = 'none';  
			document.getElementById("y7_r8_unactivated_cc2").style.display = 'none';  
			document.getElementById("n7_r8_offer_cl_tp_recount").style.display = 'none';  
			document.getElementById("y7_row8_offer_cl_tp_recount").style.display = 'none';  
			document.getElementById("row9_choose_cl_offer").style.display = 'none';  
			document.getElementById("row9_email_no").style.display = 'none';  
			document.getElementById("row9_cl_count_rsv").style.display = 'none';  
			document.getElementById("r8next_r9_can_get_on_email").style.display = 'none';  
			document.getElementById("n8_r9_can_use_email").style.display = 'none';  
			document.getElementById("y8_r9_attention_cc2").style.display = 'none';  
			document.getElementById("no8_row9_no_offer").style.display = 'none';  
			document.getElementById("y8_r9_second_offer").style.display = 'none';  
			document.getElementById("y8_ro9_is_email_correct").style.display = 'none';  
			document.getElementById("row10_goodbye_no_offer").style.display = 'none';  
			document.getElementById("row10_unactivated_cc3").style.display = 'none';  
			document.getElementById("n9_r10_choose_offer_cl").style.display = 'none';  
			document.getElementById("y9_r10_is_email_correct").style.display = 'none';  
			document.getElementById("next9_r10_can_use_email").style.display = 'none';  
			document.getElementById("n9_r10_is_email_correct").style.display = 'none';  
			document.getElementById("row11_may_get_on_email").style.display = 'none';  
			document.getElementById("n10_r11_requst_change_data").style.display = 'none';  
			document.getElementById("y10_r11_confirm_condition_for_cl").style.display = 'none';  
			document.getElementById("y10_r11_say_email_better").style.display = 'none';  
			document.getElementById("row12_choose_offer_cl").style.display = 'none';  
			document.getElementById("yes11_row12_offer_cl_email_is_correct").style.display = 'none';  
			document.getElementById("y11_r12_can_activate_now").style.display = 'none';  
			document.getElementById("n11_r12_2rsv_cc_cl").style.display = 'none';  
			document.getElementById("yes12_row13_offer_cl_can_send_on_email").style.display = 'none';  
			document.getElementById("y12_r13_activation_on_formation").style.display = 'none';  
			document.getElementById("n12_r13_activation_with_employee").style.display = 'none';  
			document.getElementById("no13_row14_choose_offer_cl").style.display = 'none';  
			} 
	};


function function_row3_cl_cc()  
{
		if (document.getElementById("row3_cl").checked) 
			{
		document.getElementById("row4_cc").style.display = 'none'; 		
		document.getElementById("row4_cl").style.display = 'table-row'; 	
			document.getElementById("row4_otkaz_3lico").style.display = 'none';  
			document.getElementById("row5_tp_spereschetom").style.display = 'none';  
			document.getElementById("row5_cc_advantages").style.display = 'none';  
			document.getElementById("row5_cc_yes_neakt_cc").style.display = 'none';  
			document.getElementById("row5_rsv_for_cc").style.display = 'none';  
			document.getElementById("no4_row5_predlojenie_cl").style.display = 'none';  
			document.getElementById("row6_neakt_no_choose_cc").style.display = 'none';  
			document.getElementById("row6_cc_to_offer_cl_yes_no").style.display = 'none';  
			document.getElementById("no5_row6_choose_product_cc").style.display = 'none';  
			document.getElementById("y5_r6_attention_cc").style.display = 'none';  
			document.getElementById("next_r7_choose_product_cc").style.display = 'none';  
			document.getElementById("next5_row6_count_for_cl").style.display = 'none';  
			document.getElementById("row7_not_activated_cc2").style.display = 'none';  
			document.getElementById("row7_no_offer_cl_from_cc_sorry").style.display = 'none';  
			document.getElementById("row7_offer_cl_to_recount").style.display = 'none';  
			document.getElementById("no6_rw7_1rsv_for_cl_and_cc").style.display = 'none';  
			document.getElementById("y6_ro7_attention_cc").style.display = 'none';  
			document.getElementById("row8_email_possible").style.display = 'none';  
			document.getElementById("y7_r8_attention_cc2").style.display = 'none';  
			document.getElementById("no7_r8_different_offer").style.display = 'none';  
			document.getElementById("y7_r8_unactivated_cc2").style.display = 'none';  
			document.getElementById("n7_r8_offer_cl_tp_recount").style.display = 'none';  
			document.getElementById("y7_row8_offer_cl_tp_recount").style.display = 'none';  
			document.getElementById("row9_choose_cl_offer").style.display = 'none';  
			document.getElementById("row9_email_no").style.display = 'none';  
			document.getElementById("row9_cl_count_rsv").style.display = 'none';  
			document.getElementById("r8next_r9_can_get_on_email").style.display = 'none';  
			document.getElementById("n8_r9_can_use_email").style.display = 'none';  
			document.getElementById("y8_r9_attention_cc2").style.display = 'none';  
			document.getElementById("no8_row9_no_offer").style.display = 'none';  
			document.getElementById("y8_r9_second_offer").style.display = 'none';  
			document.getElementById("y8_ro9_is_email_correct").style.display = 'none';  
			document.getElementById("row10_goodbye_no_offer").style.display = 'none';  
			document.getElementById("row10_unactivated_cc3").style.display = 'none';  
			document.getElementById("n9_r10_choose_offer_cl").style.display = 'none';  
			document.getElementById("y9_r10_is_email_correct").style.display = 'none';  
			document.getElementById("next9_r10_can_use_email").style.display = 'none';  
			document.getElementById("n9_r10_is_email_correct").style.display = 'none';  
			document.getElementById("row11_may_get_on_email").style.display = 'none';  
			document.getElementById("n10_r11_requst_change_data").style.display = 'none';  
			document.getElementById("y10_r11_confirm_condition_for_cl").style.display = 'none';  
			document.getElementById("y10_r11_say_email_better").style.display = 'none';  
			document.getElementById("row12_choose_offer_cl").style.display = 'none';  
			document.getElementById("yes11_row12_offer_cl_email_is_correct").style.display = 'none';  
			document.getElementById("y11_r12_can_activate_now").style.display = 'none';  
			document.getElementById("n11_r12_2rsv_cc_cl").style.display = 'none';  
			document.getElementById("yes12_row13_offer_cl_can_send_on_email").style.display = 'none';  
			document.getElementById("y12_r13_activation_on_formation").style.display = 'none';  
			document.getElementById("n12_r13_activation_with_employee").style.display = 'none';  
			document.getElementById("no13_row14_choose_offer_cl").style.display = 'none';  
			} 
		else if (document.getElementById("row3_cc").checked)
			{
		document.getElementById("row4_cl").style.display = 'none'; 			
		document.getElementById("row4_cc").style.display = 'table-row';  	
			document.getElementById("row4_otkaz_3lico").style.display = 'none';  
			document.getElementById("row5_tp_spereschetom").style.display = 'none';  
			document.getElementById("row5_cc_advantages").style.display = 'none';  
			document.getElementById("row5_cc_yes_neakt_cc").style.display = 'none';  
			document.getElementById("row5_rsv_for_cc").style.display = 'none';  
			document.getElementById("no4_row5_predlojenie_cl").style.display = 'none';  
			document.getElementById("row6_neakt_no_choose_cc").style.display = 'none';  
			document.getElementById("row6_cc_to_offer_cl_yes_no").style.display = 'none';  
			document.getElementById("no5_row6_choose_product_cc").style.display = 'none';  
			document.getElementById("y5_r6_attention_cc").style.display = 'none';  
			document.getElementById("next_r7_choose_product_cc").style.display = 'none';  
			document.getElementById("next5_row6_count_for_cl").style.display = 'none';  
			document.getElementById("row7_not_activated_cc2").style.display = 'none';  
			document.getElementById("row7_no_offer_cl_from_cc_sorry").style.display = 'none';  
			document.getElementById("row7_offer_cl_to_recount").style.display = 'none';  
			document.getElementById("no6_rw7_1rsv_for_cl_and_cc").style.display = 'none';  
			document.getElementById("y6_ro7_attention_cc").style.display = 'none';  
			document.getElementById("row8_email_possible").style.display = 'none';  
			document.getElementById("y7_r8_attention_cc2").style.display = 'none';  
			document.getElementById("no7_r8_different_offer").style.display = 'none';  
			document.getElementById("y7_r8_unactivated_cc2").style.display = 'none';  
			document.getElementById("n7_r8_offer_cl_tp_recount").style.display = 'none';  
			document.getElementById("y7_row8_offer_cl_tp_recount").style.display = 'none';  
			document.getElementById("row9_choose_cl_offer").style.display = 'none';  
			document.getElementById("row9_email_no").style.display = 'none';  
			document.getElementById("row9_cl_count_rsv").style.display = 'none';  
			document.getElementById("r8next_r9_can_get_on_email").style.display = 'none';  
			document.getElementById("n8_r9_can_use_email").style.display = 'none';  
			document.getElementById("y8_r9_attention_cc2").style.display = 'none';  
			document.getElementById("no8_row9_no_offer").style.display = 'none';  
			document.getElementById("y8_r9_second_offer").style.display = 'none';  
			document.getElementById("y8_ro9_is_email_correct").style.display = 'none';  
			document.getElementById("row10_goodbye_no_offer").style.display = 'none';  
			document.getElementById("row10_unactivated_cc3").style.display = 'none';  
			document.getElementById("n9_r10_choose_offer_cl").style.display = 'none';  
			document.getElementById("y9_r10_is_email_correct").style.display = 'none';  
			document.getElementById("next9_r10_can_use_email").style.display = 'none';  
			document.getElementById("n9_r10_is_email_correct").style.display = 'none';  
			document.getElementById("row11_may_get_on_email").style.display = 'none';  
			document.getElementById("n10_r11_requst_change_data").style.display = 'none';  
			document.getElementById("y10_r11_confirm_condition_for_cl").style.display = 'none';  
			document.getElementById("y10_r11_say_email_better").style.display = 'none';  
			document.getElementById("row12_choose_offer_cl").style.display = 'none';  
			document.getElementById("yes11_row12_offer_cl_email_is_correct").style.display = 'none';  
			document.getElementById("y11_r12_can_activate_now").style.display = 'none';  
			document.getElementById("n11_r12_2rsv_cc_cl").style.display = 'none';  
			document.getElementById("yes12_row13_offer_cl_can_send_on_email").style.display = 'none';  
			document.getElementById("y12_r13_activation_on_formation").style.display = 'none';  
			document.getElementById("n12_r13_activation_with_employee").style.display = 'none';  
			document.getElementById("no13_row14_choose_offer_cl").style.display = 'none';  
			}
	};


function function_row4_cl_yes() 
	{
		if (document.getElementById("row4_tp_s_pereschetom_yes").checked) 
			{
			document.getElementById("row5_tp_spereschetom").style.display = 'table-row';  
			document.getElementById("row7_not_activated_cc2").style.display = 'none'; 
			document.getElementById("no4_row5_predlojenie_cl").style.display = 'none';    
			document.getElementById("y7_r8_attention_cc2").style.display = 'none';
			document.getElementById("r8next_r9_can_get_on_email").style.display = 'none';
			document.getElementById("y9_r10_is_email_correct").style.display = 'none';
			document.getElementById("row8_email_possible").style.display = 'none';
			document.getElementById("y8_ro9_is_email_correct").style.display = 'none';
			document.getElementById("n11_r12_2rsv_cc_cl").style.display = 'none';
			document.getElementById("y10_r11_say_email_better").style.display = 'none';
			document.getElementById("y10_r11_confirm_condition_for_cl").style.display = 'none';
			document.getElementById("next5_row6_count_for_cl").style.display = 'none';
			document.getElementById("n9_r10_choose_offer_cl").style.display = 'none';  
			} 
	};

function function_row5_tp_spereschetom_next() 
	{
		if (document.getElementById("row5_tp_spereschetom_next").checked) 
			{
			document.getElementById("next5_row6_count_for_cl").style.display = 'table-row';
			} 
	};

function function_row6_raschety_cl_yes()
	{
		if (document.getElementById("row6_raschety_cl_yes").checked)
			{
			document.getElementById("row7_not_activated_cc2").style.display = 'table-row'; 
			document.getElementById("no6_rw7_1rsv_for_cl_and_cc").style.display = 'none';

			}
	};

function function_row7_y_klienta_est_neact_cc_no()
	{
		if (document.getElementById("row7_y_klienta_est_neact_cc_no").checked)
			{
			document.getElementById("row8_email_possible").style.display = 'table-row';
			document.getElementById("y7_r8_attention_cc2").style.display = 'none';
			}
	};

function function_row8_email_no()	
	{
		if (document.getElementById("row8_email_no").checked)
			{
			document.getElementById("row9_email_no").style.display = 'table-row'; 
			document.getElementById("y8_ro9_is_email_correct").style.display = 'none';
			}
	};

function function_row3_znakomy_no() 
	{
		if (document.getElementById("row3_znakomy_no").checked) 
			{
			document.getElementById("row4_otkaz_3lico").style.display = 'table-row';
			document.getElementById("row3_znakomy_yes").style.display = 'none';
			document.getElementById("row5_rsv_for_cc").style.display = 'none';
			document.getElementById("row4_cc").style.display = 'none';
			document.getElementById("row5_cc_advantages").style.display = 'none';
			}
	};

function function_row3_znakomy_yes()
	{
		if (document.getElementById("row3button_znakomy_yes").checked) 
			{
			document.getElementById("row3_znakomy_yes").style.display = 'table-row';
			document.getElementById("row4_otkaz_3lico").style.display = 'none';
			}
	};
	
	
function function_cc_advantages()
	{
		if (document.getElementById("row4_cc_advantages").checked) 
			{
			document.getElementById("row5_cc_advantages").style.display = 'table-row';
			document.getElementById("row5_tp_spereschetom").style.display = 'none';
			document.getElementById("row5_cc_yes_neakt_cc").style.display = 'none';
			document.getElementById("row5_rsv_for_cc").style.display = 'none';
			}
	};	
	
function function_offer_cc_yes()
	{
		if (document.getElementById("row4_cc_yes").checked) 
			{
			document.getElementById("row5_cc_yes_neakt_cc").style.display = 'table-row';
			document.getElementById("row5_cc_advantages").style.display = 'none';
			document.getElementById("row5_rsv_for_cc").style.display = 'none';
			document.getElementById("row7_offer_cl_to_recount").style.display = 'none';
			document.getElementById("row9_cl_count_rsv").style.display = 'none';
			document.getElementById("row10_unactivated_cc3").style.display = 'none';
			document.getElementById("row11_may_get_on_email").style.display = 'none';
			document.getElementById("row12_choose_offer_cl").style.display = 'none';
			document.getElementById("row10_goodbye_no_offer").style.display = 'none';
			document.getElementById("row7_no_offer_cl_from_cc_sorry").style.display = 'none';
			document.getElementById("row6_cc_to_offer_cl_yes_no").style.display = 'none';
			document.getElementById("no5_row6_choose_product_cc").style.display = 'none';
			}
	};	

function function_offer_cc_no()
	{
		if (document.getElementById("row4_cc_no").checked) 
			{
			document.getElementById("row5_rsv_for_cc").style.display = 'table-row';
			document.getElementById("row5_cc_advantages").style.display = 'none';
			document.getElementById("row5_cc_yes_neakt_cc").style.display = 'none';
			document.getElementById("no5_row6_choose_product_cc").style.display = 'none';
			document.getElementById("y5_r6_attention_cc").style.display = 'none';
			document.getElementById("next_r7_choose_product_cc").style.display = 'none';
			
			}
	};		

function function_row5_rsv_for_cc_no()
	{
		if (document.getElementById("row5_cc_no_rsv_no").checked) 
			{
			document.getElementById("row6_cc_to_offer_cl_yes_no").style.display = 'table-row'; 
			document.getElementById("row10_unactivated_cc3").style.display = 'none';
			}
	};		

function function_row6_cc_to_offer_cl_no()
	{
		if (document.getElementById("row6_cc_to_offer_cl_no").checked) 
			{
			document.getElementById("row7_no_offer_cl_from_cc_sorry").style.display = 'table-row'; 
			document.getElementById("row7_offer_cl_to_recount").style.display = 'none';
			}
	};	

function function_row6_cc_to_offer_cl_yes()
	{
		if (document.getElementById("row6_cc_to_offer_cl_yes").checked) 
			{
			document.getElementById("row7_offer_cl_to_recount").style.display = 'table-row'; 
			document.getElementById("row7_no_offer_cl_from_cc_sorry").style.display = 'none';
			}
	};			

function function_row7_offer_cl_to_recount_to_accept_offer()
	{
		if (document.getElementById("row7_offer_cl_to_recount_to_accept_offer").checked) 
			{
			document.getElementById("y7_row8_offer_cl_tp_recount").style.display = 'table-row';     

			document.getElementById("n7_r8_offer_cl_tp_recount").style.display = 'none';
			document.getElementById("row9_cl_count_rsv").style.display = 'none';
			document.getElementById("row10_unactivated_cc3").style.display = 'none';
			document.getElementById("row11_may_get_on_email").style.display = 'none';
			document.getElementById("row10_goodbye_no_offer").style.display = 'none';
			}
	};		

function function_row8_offer_cl_tp_recount_dalee()	
	{
		if (document.getElementById("row8_offer_cl_tp_recount_dalee").checked) 
			{
			document.getElementById("row9_cl_count_rsv").style.display = 'table-row';
			}
	};		

function function_row9_cl_count_rsv_no()
	{
		if (document.getElementById("row9_cl_count_rsv_no").checked) 
			{
			document.getElementById("row10_goodbye_no_offer").style.display = 'table-row';
			}
	};	

function function_row9_cl_count_rsv_yes()
	{
		if (document.getElementById("row9_cl_count_rsv_yes").checked) 
			{
			document.getElementById("row10_unactivated_cc3").style.display = 'table-row'; 
			document.getElementById("row10_goodbye_no_offer").style.display = 'none';
			}
	};		

function function_row10_unactivated_cc3_no()
	{
		if (document.getElementById("row10_unactivated_cc3_no").checked) 
			{
			document.getElementById("row11_may_get_on_email").style.display = 'table-row';
			document.getElementById("y6_ro7_attention_cc").style.display = 'none';
			}
	};	

function function_row11_may_get_on_email_no()
	{
		if (document.getElementById("row11_may_get_on_email_no").checked) 
			{
			document.getElementById("row12_choose_offer_cl").style.display = 'table-row';

			document.getElementById("yes11_row12_offer_cl_email_is_correct").style.display = 'none';
			}
	};	

function function_neakt_cc_no()
	{
		if (document.getElementById("row5_neakt_cc_no").checked) 
			{
			document.getElementById("no5_row6_choose_product_cc").style.display = 'table-row';
			document.getElementById("row10_unactivated_cc3").style.display = 'none';
			document.getElementById("y5_r6_attention_cc").style.display = 'none';
			document.getElementById("next_r7_choose_product_cc").style.display = 'none';
			}
	};			

function function_neakt_cc_yes()
	{
		if (document.getElementById("row5_neakt_cc_yes").checked) 
			{
			document.getElementById("y5_r6_attention_cc").style.display = 'table-row';
			document.getElementById("no5_row6_choose_product_cc").style.display = 'none';
			}
	};	

function function_r6_attention_cc_next()
	{
		if (document.getElementById("r6_attention_cc_next").checked) 
			{
			document.getElementById("next_r7_choose_product_cc").style.display = 'table-row';
			}
	};	

function function_row5_rsv_for_cc_yes()
	{
		if (document.getElementById("row5_cc_no_rsv_yes").checked) 
			{
			document.getElementById("row10_unactivated_cc3").style.display = 'table-row';  
			document.getElementById("row6_cc_to_offer_cl_yes_no").style.display = 'none';   

			document.getElementById("row7_offer_cl_to_recount").style.display = 'none';
			document.getElementById("n7_r8_offer_cl_tp_recount").style.display = 'none';
			document.getElementById("row9_cl_count_rsv").style.display = 'none';
			}
	};	


function function_row4_tp_s_pereschetom_no()
	{
		if (document.getElementById("row4_tp_s_pereschetom_no").checked) 
			{
			document.getElementById("no4_row5_predlojenie_cl").style.display = 'table-row'; 
			document.getElementById("row5_tp_spereschetom").style.display = 'none';  
			document.getElementById("no6_rw7_1rsv_for_cl_and_cc").style.display = 'none';
			document.getElementById("row7_not_activated_cc2").style.display = 'none';
			document.getElementById("no8_row9_no_offer").style.display = 'none';
			document.getElementById("y8_r9_second_offer").style.display = 'none';
			document.getElementById("no7_r8_different_offer").style.display = 'none';
			document.getElementById("next5_row6_count_for_cl").style.display = 'none';
			document.getElementById("no5_row6_choose_product_cc").style.display = 'none';
			}
	};	

function function_row5_predlojenie_cl_next()
	{
		if (document.getElementById("row5_predlojenie_cl_next").checked) 
			{
			document.getElementById("next5_row6_count_for_cl").style.display = 'table-row'; 
			document.getElementById("row5_tp_spereschetom").style.display = 'none'; 
			}
	};	

function function_row6_raschety_cl_no()
	{
		if (document.getElementById("row6_raschety_cl_no").checked) 
			{
			document.getElementById("no6_rw7_1rsv_for_cl_and_cc").style.display = 'table-row'; 
			document.getElementById("row7_not_activated_cc2").style.display = 'none';
			}
	};	

function function_row7_y_klienta_est_neact_cc_yes()
	{
		if (document.getElementById("row7_y_klienta_est_neact_cc_yes").checked) 
			{
			document.getElementById("y7_r8_attention_cc2").style.display = 'table-row'; 
			document.getElementById("row8_email_possible").style.display = 'none';
			}
	};	

function function_r8_attention_cc2()
	{
		if (document.getElementById("r8_attention_cc2_next").checked) 
			{
			document.getElementById("r8next_r9_can_get_on_email").style.display = 'table-row';
			}
	};	


function function_r9_email_no()
	{
		if (document.getElementById("r9_email_no").checked) 
			{
			document.getElementById("n9_r10_choose_offer_cl").style.display = 'table-row';
			}
	};	



function function_r9_email_yes()
	{
		if (document.getElementById("r9_email_yes").checked) 
			{
			document.getElementById("y9_r10_is_email_correct").style.display = 'table-row';
			}
	};		


function function_r10_is_email_correct_no()	
	{
		if (document.getElementById("r10_is_email_correct_no").checked) 
			{
			document.getElementById("n10_r11_requst_change_data").style.display = 'table-row';
			}
	};	


function function_r11_requst_change_data_next()
	{
		if (document.getElementById("r11_requst_change_data_next").checked) 
			{
			document.getElementById("n9_r10_choose_offer_cl").style.display = 'table-row';
			}
	};	



function function_count_for_cl_yes()
	{
		if (document.getElementById("count_for_cl_yes").checked) 
			{
			document.getElementById("row7_not_activated_cc2").style.display = 'table-row'; 
			document.getElementById("no6_rw7_1rsv_for_cl_and_cc").style.display = 'none';   
			document.getElementById("no8_row9_no_offer").style.display = 'none';
			document.getElementById("y8_r9_second_offer").style.display = 'none';
			document.getElementById("no7_r8_different_offer").style.display = 'none';
			}
	};	

function function_count_for_cl_no()
	{
		if (document.getElementById("count_for_cl_no").checked) 
			{
			document.getElementById("no6_rw7_1rsv_for_cl_and_cc").style.display = 'table-row';
			document.getElementById("row7_not_activated_cc2").style.display = 'none'; 
			document.getElementById("row8_email_possible").style.display = 'none'; 
			document.getElementById("y7_r8_attention_cc2").style.display = 'none'; 
			document.getElementById("y11_r12_can_activate_now").style.display = 'none'; 
			document.getElementById("row12_choose_offer_cl").style.display = 'none'; 
			document.getElementById("y10_r11_say_email_better").style.display = 'none'; 
			document.getElementById("y8_ro9_is_email_correct").style.display = 'none';   
			}
	};	

function function_row7_rsv_no()
	{
		if (document.getElementById("row7_rsv_no").checked) 
			{
			document.getElementById("no7_r8_different_offer").style.display = 'table-row';
			document.getElementById("y7_r8_unactivated_cc2").style.display = 'none';
			}
	};		

function function_row7_rsv_yes()
	{
		if (document.getElementById("row7_rsv_yes").checked) 
			{
			document.getElementById("y7_r8_unactivated_cc2").style.display = 'table-row';
			document.getElementById("no7_r8_different_offer").style.display = 'none';
			}
	};	

function function_r8_unactivated_cc2_no()
	{
		if (document.getElementById("r8_unactivated_cc2_no").checked) 
			{
			document.getElementById("n8_r9_can_use_email").style.display = 'table-row';
			document.getElementById("y8_r9_attention_cc2").style.display = 'none';
			}
	};		

function function_r8_unactivated_cc2_yes()
	{
		if (document.getElementById("r8_unactivated_cc2_yes").checked) 
			{
			document.getElementById("y8_r9_attention_cc2").style.display = 'table-row';
			document.getElementById("n8_r9_can_use_email").style.display = 'none';
			}
	};		

function function_r9_attention_cc2_next()
	{
		if (document.getElementById("r9_attention_cc2_next").checked) 
			{
			document.getElementById("next9_r10_can_use_email").style.display = 'table-row';			
			}
	};	

function function_r8_different_offer_no()
	{
		if (document.getElementById("r8_different_offer_no").checked) 
			{
			document.getElementById("no8_row9_no_offer").style.display = 'table-row';
			document.getElementById("y8_r9_second_offer").style.display = 'none';			
			}
	};			

function function_r8_different_offer_yes()
	{
		if (document.getElementById("r8_different_offer_yes").checked) 
			{
			document.getElementById("y8_r9_second_offer").style.display = 'table-row';
			document.getElementById("no8_row9_no_offer").style.display = 'none';
			}
	};			

function function_r9_second_offer_no()
	{
		if (document.getElementById("r9_second_offer_no").checked) 
			{
			document.getElementById("no8_row9_no_offer").style.display = 'table-row';
			document.getElementById("no5_row6_choose_product_cc").style.display = 'none';
			document.getElementById("row5_cc_advantages").style.display = 'none';
			}
	};			

function function_r9_second_offer_yes()
	{
		if (document.getElementById("r9_second_offer_yes").checked) 
			{
			document.getElementById("no5_row6_choose_product_cc").style.display = 'table-row';
			document.getElementById("no8_row9_no_offer").style.display = 'none';
			document.getElementById("row5_cc_advantages").style.display = 'none';
			}
	};		

function function_r9_second_offer_advantages()
	{
		if (document.getElementById("r9_second_offer_advantages").checked) 
			{
			document.getElementById("row5_cc_advantages").style.display = 'table-row';
			document.getElementById("no8_row9_no_offer").style.display = 'none'; 
			document.getElementById("no5_row6_choose_product_cc").style.display = 'none'; 
			}
	};		

function function_row10_unactivated_cc3_yes()
	{
		if (document.getElementById("row10_unactivated_cc3_yes").checked) 
			{
			document.getElementById("y6_ro7_attention_cc").style.display = 'table-row';
			document.getElementById("row11_may_get_on_email").style.display = 'none'; 
			}
	};		

function function_ro7_attention_cc_next()
	{
		if (document.getElementById("ro7_attention_cc_next").checked) 
			{
			document.getElementById("row11_may_get_on_email").style.display = 'table-row';
			}
	};			

function function_row8_email_yes()
	{
		if (document.getElementById("row8_email_yes").checked) 
			{
			document.getElementById("y8_ro9_is_email_correct").style.display = 'table-row';
			document.getElementById("row9_email_no").style.display = 'none';
			}
	};	

function function_ro9_is_email_correct_no()
	{
		if (document.getElementById("ro9_is_email_correct_no").checked) 
			{
			document.getElementById("n9_r10_is_email_correct").style.display = 'table-row';
			document.getElementById("row12_choose_offer_cl").style.display = 'none';
			document.getElementById("y10_r11_confirm_condition_for_cl").style.display = 'none';
			document.getElementById("y10_r11_say_email_better").style.display = 'none'; 

			}
	};	

function function_r10_is_email_correct_next()
	{
		if (document.getElementById("r10_is_email_correct_next").checked) 
			{
			document.getElementById("no13_row14_choose_offer_cl").style.display = 'table-row';
			}
	};	

function function_ro9_is_email_correct_yes()
	{
		if (document.getElementById("ro9_is_email_correct_yes").checked) 
			{
			document.getElementById("y10_r11_say_email_better").style.display = 'table-row'; 
			document.getElementById("n9_r10_is_email_correct").style.display = 'none';
			}
	};	

function function_r11_say_email_better_no()	
	{
		if (document.getElementById("r11_say_email_better_no").checked) 
			{
			document.getElementById("row12_choose_offer_cl").style.display = 'table-row'; 
			document.getElementById("y11_r12_can_activate_now").style.display = 'table-row'; 
			document.getElementById("y10_r11_confirm_condition_for_cl").style.display = 'none'; 
			}
	};		

function function_r11_say_email_better_yes()
	{
		if (document.getElementById("r11_say_email_better_yes").checked) 
			{
			document.getElementById("y10_r11_confirm_condition_for_cl").style.display = 'table-row'; 
			document.getElementById("row12_choose_offer_cl").style.display = 'none';
			}
	};		

function function_r11_confirm_condition_for_cl_yes()
	{
		if (document.getElementById("r11_confirm_condition_for_cl_yes").checked) 
			{
			document.getElementById("y11_r12_can_activate_now").style.display = 'table-row';
			}
	};	

function function_r11_confirm_condition_for_cl_no()	
	{
		if (document.getElementById("r11_confirm_condition_for_cl_no").checked) 
			{
			document.getElementById("n11_r12_2rsv_cc_cl").style.display = 'table-row';
			}
	};	


function function_row7_offer_cl_to_recount_to_offer_cl_to_recount()
	{
		if (document.getElementById("row7_offer_cl_to_recount_to_offer_cl_to_recount").checked) 
			{
			document.getElementById("n7_r8_offer_cl_tp_recount").style.display = 'table-row'; 			
			document.getElementById("y7_row8_offer_cl_tp_recount").style.display = 'none';
			document.getElementById("row9_cl_count_rsv").style.display = 'none';
			document.getElementById("row10_unactivated_cc3").style.display = 'none';
			document.getElementById("row10_goodbye_no_offer").style.display = 'none';   
			}
	};		


function function_r8_offer_cl_tp_recount_dalee()
	{
		if (document.getElementById("r8_offer_cl_tp_recount_dalee").checked) 
			{
			document.getElementById("row9_cl_count_rsv").style.display = 'table-row';
			}
	};		

function function_row11_may_get_on_email_yes()
	{
		if (document.getElementById("row11_may_get_on_email_yes").checked) 
			{
			document.getElementById("yes11_row12_offer_cl_email_is_correct").style.display = 'table-row';
			document.getElementById("row12_choose_offer_cl").style.display = 'none';
			}
	};			

function function_yes11_row12_offer_cl_email_is_correct_yes()
	{
		if (document.getElementById("yes11_row12_offer_cl_email_is_correct_yes").checked) 
			{
			document.getElementById("yes12_row13_offer_cl_can_send_on_email").style.display = 'table-row';
			document.getElementById("n10_r11_requst_change_data").style.display = 'none';
			document.getElementById("n9_r10_choose_offer_cl").style.display = 'none';
			}
	};	


function function_yes11_row12_offer_cl_email_is_correct_no()
	{
		if (document.getElementById("yes11_row12_offer_cl_email_is_correct_no").checked) 
			{
			document.getElementById("n10_r11_requst_change_data").style.display = 'table-row';
			document.getElementById("yes12_row13_offer_cl_can_send_on_email").style.display = 'none';
			}
	};		

function function_yes12_row13_offer_cl_can_send_on_email_no()
	{
		if (document.getElementById("yes12_row13_offer_cl_can_send_on_email_no").checked) 
			{
			document.getElementById("no13_row14_choose_offer_cl").style.display = 'table-row';
			document.getElementById("y10_r11_confirm_condition_for_cl").style.display = 'none';
			}
	};		

function function_yes12_row13_offer_cl_can_send_on_email_yes()
	{
		if (document.getElementById("yes12_row13_offer_cl_can_send_on_email_yes").checked) 
			{
			document.getElementById("y10_r11_confirm_condition_for_cl").style.display = 'table-row';
			document.getElementById("no13_row14_choose_offer_cl").style.display = 'none';
			}
	};		

function function_r12_can_activate_now_yes()
	{
		if (document.getElementById("r12_can_activate_now_yes").checked) 
			{
			document.getElementById("y12_r13_activation_on_formation").style.display = 'table-row';
			document.getElementById("n12_r13_activation_with_employee").style.display = 'none';
			}
	};		

function function_r12_can_activate_now_no()
	{
		if (document.getElementById("r12_can_activate_now_no").checked) 
			{
			document.getElementById("n12_r13_activation_with_employee").style.display = 'table-row';
			document.getElementById("y12_r13_activation_on_formation").style.display = 'none';
			}
	};	

















// function function_row4_cl_yes() 
// {
// 		if (document.getElementById("row4_tp_s_pereschetom_yes").checked) 
// 			{
// 			document.getElementById("row5_tp_spereschetom").style.display = 'table-row';
// 			document.getElementById("").style.display = 'none';
// 			} 
// 		else if (document.getElementById("").checked)
// 			{
// 			document.getElementById("").style.display = 'none';
// 			document.getElementById("").style.display = 'table-row';
// 			}
// 	};
