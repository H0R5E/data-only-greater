---
layout: simple
title: Verification and Validation in Marine Renewable Energy
---

Verification and validation is a process to improve the degree of confidence that users can have in the results of a numerical model. This process is achieved through the application of two main stages:

* Verification – This examines whether the numerical model has been programmed correctly. In general, the numerical model must be tested for its 
  ability to return the mathematical approximation it was intended to simulate.
* Validation – Does the mathematics with which  the model is designed actually represent the real life physics that the model was supposed to 
  simulate? Further to that, to what degree can the numerical method be trusted to produce accurate results for physics that can’t be tested 
  experimentally?

The final remark is a very pertinent one in marine renewable energy research. The ability to carry out full-scale experimental testing is almost impossible (this effectively means being at sea where experimental conditions can not be achieved) and thus most experimental testing must be done at reduced scale. Scale testing has been very successful for wave energy converters and the University of Edinburgh has a rich history of such experiments. However, scale testing for tidal devices is more challenging due to the interaction of the free surface with the submerged device. Hence, much more emphasis has been placed on numerical models to provide insight rather than using experiments.

My interest is in how models can be tested to ensure they are producing the right results. The first stage of the process is to make sure the model does not have any bugs (verification) and then to confirm whether the model has the correct approximations for modelling the final product (such as a tidal turbine). Without full-scale device modelling, the numerical models must be validated in stages for related objects like hydrofoils, wind turbines, propellers etc. If the numerical model can produce accurate results for these similar problems then it may be possible to infer that the model will produce good results for a tidal turbine. This is still an inference, however, and there is some debate as to whether truly quantitative results (with error bounds) can be produced without testing for the final full-scale device.

Interestingly, similar problems occur with nuclear stockpile testing. You can’t explode nuclear weapons very often, any more, so a lot of work has gone into producing numerical models that can simulate nuclear detonations. Unfortunately, due to a lack of data about how a bomb should detonate, the scientists tasked with producing these models struggle to determine how well the simulation will emulate a real explosion. Again, they use a building block approach to determining the accuracy of their models which is collated through a document known as a Physical Identification and Ranking Table (PIRT). These tables split the final simulation into its constituent physics and smaller combinations of physics and then identify any existing numerical models capable of resolving those physics. Once identified the literature is checked to see if the model has been verified and then whether any validation experiments have taken place. This has two significant advantages, first it can provide confidence in the abilities of the designed model to produce the physics of the final problem and secondly it identifies the frontier of knowledge in the field. This frontier of knowledge shows where model and experiments that haven’t already been commisioned will need to be undertaken to improve the confidence in the final simulation. This will also show were work does not have to be done and for a new industry like marine renewables this could be a very useful result. Unfortunately, because there is so little literature available for marine renewable energy (tidal in particular) collating these tables is very challenging.






