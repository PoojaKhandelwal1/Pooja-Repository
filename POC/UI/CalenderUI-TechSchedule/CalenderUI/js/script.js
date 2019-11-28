jQuery(document).ready(function(){
	$('.appointment').click(function(){
		$(this).parent().addClass('showPopover');
		$('.appointmentWithServiceDetails').hide();
		$('.appointmentWithServicePreview').show();			
		$('.multipleAppointmentsPopover .appointmentDetails').hide();		
		$('.multipleAppointmentsPopover .appointmentPreview').show();		
	});
	
	$('.popOverHeader .btn-closePopover').click(function(){
		$(this).closest('td').removeClass('showPopover');
	});	

	$('.appointmentWithService').click(function(){
		$(this).parent().addClass('showPopover');
		$('.appointmentWithServiceDetails').hide();
		$('.appointmentWithServicePreview').show();		
	});
	
	$('.btn-viewServiceJobDetails').click(function(){
		$('.appointmentWithServicePreview').hide();		
		$('.appointmentWithServiceDetails').show();
	});
	
	$('.popOverHeader .btn-viewServiceJobPreview').click(function(){
		$('.appointmentWithServiceDetails').hide();
		$('.appointmentWithServicePreview').show();		
	});
	
	$('.multipleAppointmentsPopover .appointmentList > li').click(function(){
		$('.multipleAppointmentsPopover .appointmentPreview').hide();
		$('.multipleAppointmentsPopover .appointmentDetails').show();		
	});
	
	$('.multipleAppointmentsPopover .btn-appointmentPreview').click(function(){
		$('.multipleAppointmentsPopover .appointmentDetails').hide();		
		$('.multipleAppointmentsPopover .appointmentPreview').show();
	});	

});
