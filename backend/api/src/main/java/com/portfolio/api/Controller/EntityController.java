package com.portfolio.api.Controller;

import java.util.ArrayList;
import java.util.List;

import com.portfolio.api.Entity.Gallery;
import com.portfolio.api.Repository.GalleryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class EntityController {
    
    @Autowired
    GalleryRepository galleryRepository;

    @RequestMapping(path = "/api/gallery", method = RequestMethod.GET)
	public List<Gallery> getGallery() {
        List<Gallery> galleryList = new ArrayList<Gallery>();
        galleryList = galleryRepository.findAll();
        return galleryList;
	}
}