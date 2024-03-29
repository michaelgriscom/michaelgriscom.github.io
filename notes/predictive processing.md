- Predictive processing is a model for cognition: how the brain transforms and synthesizes sensory data into conscious experience, and how it converts mental state into action
- The model
	- Cognition is structured via a network of [abstraction layers](abstraction%20layers), starting at raw sense data and going up to conscious thought, abstract ideas, etc
	- The process underlying cognition consists of two unidirectional flows across these layers
		- a [[bottom up system]] which passes information upwards
			- e.g., light/dark signals in the eyes -> edge detection -> object detection
		- a [[top down system]] which passes predictions (in the form of sense data) downward
			- e.g., the existence of objects is independent of observation -> mugs are one of these objects -> I see what looks to be a mug which was moved behind a table, so the mug now exists behind the table
	- Both information flows deal in [[probability distributions]], which contain information about both the likely state along with the level of precision (confidence) in the prediction
		- the bottom up system has to deal with signal noise
		- the top down system has to deal with inaccurate models
	- Since top down predictions are made in the same form as the bottom up data (i.e., in the form of sensory input), at each layer it's possible to compare the predictions with the observations
		- One way to do these comparisons is variational [bayesian reasoning](bayesian%20reasoning), which can serve as a useful model here
			- This can give us the likelihood of an observation given our model, and also help us to improve and choose between models (i.e. model selection)
	- If the top down predictions don't match the bottom up sense data, there are a few possible results:
		- If the bottom up data is low precision, then it can be ignored and overridden by the top down system
		- If the data and prediction are irreconcilable, the data will cascade upward, indicating "surprisal"
			- The process then repeats at the next layer, with the top down system having the option of ignoring the input data, updating its models, or signaling surprisal upward
	- The objective function of the system is to minimize surprisal
		- this means constantly tweaking model parameters or creating new ones
	- The result is a "controlled hallucination"
		- a manufactured perception based on the brain's predictions about the world translated into expected sensations, and shaped by the actual sense data
	- There is also a set of "hyperpriors": axioms which are needed to bootstrap learning
		- "sensory synchronicity" (that all senses are describing the same world)
		- object permanence (the world is divided into objects which exist irrespective of whether they're in the sensory field)
	- These hyperpriors are either innate or learned

- Applications to neuroscience
	- NMDA glutamatergic system mostly carries the top-down stream
	- AMPA glutamatergic system mostly carries the bottom-up stream
	- dopamine carries something related to precision and surprisal
	- serotonin
		- 5-HT1A
			- The more strongly it's activated, the more likely you are to resolve prediction error by adjusting predictions
			- Binding to it => hedonic adaptation
			- Decreases impulsivity and aggression
			- Target of some SSRIs
		- 5-HT2A
			- Increases neural annealing
				- maybe increases randomness in model generation, or decreases strength of priors
			- potentially good for solving problems with clear feedback/solutions (because you can see which solutions are effective)
			- maybe not good for solving problems that don't have clear feedback, e.g. introspection (you might rewrite conceptual framework in a silly way)
		- When a person encounters adversity, serotonin is released
			- activates 1A first, results in stoicism
			- if adversity worsens, 2A starts getting activated and the brain starts to pursue more out of the box solutions
			- maybe this explains why if someone is under severe stress they can "snap"

- Tweaking the parameters
	- High top down precision
		- Effects: overly high predictive precision leading to constant surprisal
		- Pathology: autism
			- e.g. feeling tags on shirts
				- top down system should predict this away when giving attention to other things
				- for an autistic person, will predict that the sensation will be identical (too narrow a prediction) resulting in surprisal and irritation
	- Low top down precision
		- Effects: Weak predictions would be more subject to bottom up data
		- Pathology: schizophrenia
			- their top down system fails to generate reliable models, and instead creates anomalous predictions (e.g. that a small event is cosmically important)
			- the system fails to adjust to surprisal and builds more epicycles, eventually it completely ignores the bottom up stream and creates hallucinations
		- Treatment: block 5-HT2A
			- Dopamine antagonizer => tell system to ignore confidence level errors
	- Low bottom up precision
		- Effects: more weight given to priors
		- Pathology
			- Depression
				- Possibly related to low precision of sensory/perceptual data
					- sensory evidence here includes internal senses, e.g. experience of memories, ability to detect own emotions, ability to interpret others' actions
				- This results in more weight given to pessimistic priors
				- this explains a few observations
					- depressed people literally see the world as gray
					- sense of smell worsens with level of depression
					- trauma patients can't sense their body as well
					- depression and trauma result in reduced autobiographical memory
				- positive observations can then be ignored/diminished, making depression hard to escape
				- the result is a "better safe than sorry" approach
					- more important to avoid false negatives than false positives
					- treat everything as a 
					- potential threat
		- Treatment
			- weighting bottom up over top down systems
	- Weighting bottom up over top down systems
		- Triggers: paying attention, meditation, psychedelics, MDMA, stimulate 5-HT2A receptors
		- It's like increasing the level of neural annealing
		- Effects: less vulnerable to illusion, rewrite top down priors (like PTSD)
	- Weighing top down over bottom up systems
		- Examples
			- Optical illusions
			- Visual blind spot
			- [Toyota pedal recall](https://en.wikipedia.org/wiki/2009%E2%80%932011_Toyota_vehicle_recalls#Factors_leading_to_pedal_misapplication)
			- Phantom limb syndrome
			- Dreams
			- Imagination