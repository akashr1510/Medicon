//package com.spring.service.Patient;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.spring.config.UserPrincipal;
//import com.spring.dao.PatientDaoInterface;
//import com.spring.models.Patient;
//
//@Service
//public class PatientServe implements UserDetailsService {
//
//	@Autowired
//	private PatientDaoInterface patientDaoInterface;
//
////	@Override
////	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
////		 Patient patient = patientDaoInterface.findByEmail(username);
////		
////		 if(patient ==null)
////		 {
////			 throw new UsernameNotFoundException("userNot found");
////	
////		 }
////		 return new UserPrincipal(patient);
//				
//		
//	}
//
//	
//}
