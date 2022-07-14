package com.devsuperior.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;

	public List<Sale> findAllSales() {
		return repository.findAll();
	}
	
	public Page<Sale> findAllSalesByPage(Pageable pageable) {
		return repository.findAll(pageable);
	}
	
	public Page<Sale> findAllSalesByDate(String minDate, String maxDate, Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault()); // create date with today

		// Date in String format to LocalDate - converter - to customize JPQL expression in repository
		LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate); // ternary conditional condition
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);                // ternary conditional condition

		return repository.findAllSalesByDate(min, max, pageable);
	}	
}